import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, Table, Tag, Button, Empty, Spin, Pagination, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingOutlined, 
  EyeOutlined, 
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  TruckOutlined,
  HomeOutlined
} from '@ant-design/icons';
import apiClient from '../services/api';

// Format currency helper
const formatCurrency = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return '0';
  }
  return Number(value).toLocaleString('id-ID');
};

const { Option } = Select;

function OrderHistoryPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [statusFilter, setStatusFilter] = useState('');

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['orderHistory', page, limit, statusFilter],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      if (statusFilter) {
        params.append('status', statusFilter);
      }
      const response = await apiClient.get(`/api/orders?${params.toString()}`);
      return response.data;
    },
  });

  const getStatusTag = (status) => {
    const statusConfig = {
      pending: { color: 'orange', icon: <ClockCircleOutlined />, text: 'Menunggu Pembayaran' },
      paid: { color: 'blue', icon: <CheckCircleOutlined />, text: 'Sudah Dibayar' },
      processing: { color: 'cyan', icon: <ClockCircleOutlined />, text: 'Sedang Diproses' },
      shipped: { color: 'purple', icon: <TruckOutlined />, text: 'Sedang Dikirim' },
      delivered: { color: 'green', icon: <CheckCircleOutlined />, text: 'Sudah Diterima' },
      failed: { color: 'red', icon: <CloseCircleOutlined />, text: 'Gagal' },
      cancelled: { color: 'default', icon: <CloseCircleOutlined />, text: 'Dibatalkan' },
    };

    const config = statusConfig[status] || { color: 'default', icon: null, text: status };
    return (
      <Tag color={config.color} icon={config.icon}>
        {config.text}
      </Tag>
    );
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => (
        <span className="font-mono text-sm font-semibold">{text}</span>
      ),
    },
    {
      title: 'Tanggal',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => {
        const d = new Date(date);
        return (
          <div>
            <div className="text-sm font-medium">
              {d.toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </div>
            <div className="text-xs text-gray-500">
              {d.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        );
      },
    },
    {
      title: 'Items',
      key: 'items',
      render: (_, record) => (
        <div>
          <div className="text-sm font-medium">
            {record.items?.length || 0} item(s)
          </div>
          <div className="text-xs text-gray-500">
            {record.items?.[0]?.name || 'N/A'}
            {record.items?.length > 1 && ` +${record.items.length - 1} lainnya`}
          </div>
        </div>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount) => (
        <span className="font-semibold text-blue-600">
          {formatCurrency(amount)}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => getStatusTag(status),
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => navigate(`/orders/${record.orderId}`)}
          className="!p-0"
        >
          Detail
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-7xl">
        <div className="flex justify-center items-center min-h-[400px]">
          <Spin size="large" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-7xl">
        <Card>
          <Empty
            description={
              <span className="text-red-500">
                Gagal memuat riwayat pesanan. Silakan coba lagi.
              </span>
            }
          >
            <Button type="primary" onClick={() => refetch()}>
              Coba Lagi
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  const orders = data?.data || [];
  const total = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-7xl">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingOutlined className="text-blue-500" />
              Riwayat Pesanan
            </h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Lihat semua pesanan Anda
            </p>
          </div>
          <Button
            icon={<HomeOutlined />}
            onClick={() => navigate('/')}
          >
            Kembali ke Home
          </Button>
        </div>

        {/* Filter */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <Select
            placeholder="Filter Status"
            allowClear
            value={statusFilter || undefined}
            onChange={(value) => {
              setStatusFilter(value || '');
              setPage(1);
            }}
            className="w-full sm:w-48"
          >
            <Option value="pending">Menunggu Pembayaran</Option>
            <Option value="paid">Sudah Dibayar</Option>
            <Option value="processing">Sedang Diproses</Option>
            <Option value="shipped">Sedang Dikirim</Option>
            <Option value="delivered">Sudah Diterima</Option>
            <Option value="failed">Gagal</Option>
            <Option value="cancelled">Dibatalkan</Option>
          </Select>
        </div>
      </div>

      <Card>
        {orders.length === 0 ? (
          <Empty
            description="Belum ada pesanan"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          >
            <Button type="primary" onClick={() => navigate('/products')}>
              Mulai Belanja
            </Button>
          </Empty>
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                dataSource={orders}
                rowKey="_id"
                pagination={false}
                className="mb-4"
              />
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center mt-4">
                <Pagination
                  current={page}
                  total={total}
                  pageSize={limit}
                  onChange={(newPage) => setPage(newPage)}
                  showSizeChanger={false}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} dari ${total} pesanan`
                  }
                />
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

export default OrderHistoryPage;

