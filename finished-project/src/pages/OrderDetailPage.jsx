import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  Card, 
  Descriptions, 
  Tag, 
  Button, 
  Spin, 
  Empty, 
  Divider,
  List,
  Alert
} from 'antd';
import { 
  ArrowLeftOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  TruckOutlined,
  ShoppingOutlined,
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

// Format date helper
const formatDate = (date) => {
  if (!date) return '-';
  const d = new Date(date);
  return d.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

function OrderDetailPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['orderDetail', orderId],
    queryFn: async () => {
      const response = await apiClient.get(`/api/orders/${orderId}`);
      return response.data.data;
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
      <Tag color={config.color} icon={config.icon} className="text-base px-3 py-1">
        {config.text}
      </Tag>
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-4xl">
        <div className="flex justify-center items-center min-h-[400px]">
          <Spin size="large" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-4xl">
        <Card>
          <Empty
            description={
              <span className="text-red-500">
                Pesanan tidak ditemukan atau terjadi kesalahan.
              </span>
            }
          >
            <Button type="primary" onClick={() => navigate('/orders')}>
              Kembali ke Riwayat Pesanan
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  const order = data;

  if (!order) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-4xl">
        <Card>
          <Empty description="Pesanan tidak ditemukan" />
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/orders')}
          className="mb-4"
        >
          Kembali ke Riwayat Pesanan
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingOutlined className="text-blue-500" />
              Detail Pesanan
            </h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Order ID: <span className="font-mono font-semibold">{order.orderId}</span>
            </p>
          </div>
          {getStatusTag(order.status)}
        </div>
      </div>

      {/* Status Alert */}
      {order.status === 'pending' && (
        <Alert
          message="Menunggu Pembayaran"
          description="Silakan selesaikan pembayaran Anda. Pesanan akan otomatis terupdate setelah pembayaran berhasil."
          type="warning"
          showIcon
          className="mb-6"
        />
      )}

      {/* Order Information */}
      <Card title="Informasi Pesanan" className="mb-6">
        <Descriptions column={{ xs: 1, sm: 2 }} bordered>
          <Descriptions.Item label="Order ID">
            <span className="font-mono">{order.orderId}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {getStatusTag(order.status)}
          </Descriptions.Item>
          <Descriptions.Item label="Tanggal Pesanan">
            {formatDate(order.createdAt)}
          </Descriptions.Item>
          {order.midtransData?.transactionTime && (
            <Descriptions.Item label="Waktu Transaksi">
              {formatDate(order.midtransData.transactionTime)}
            </Descriptions.Item>
          )}
          {order.midtransData?.settlementTime && (
            <Descriptions.Item label="Waktu Settlement">
              {formatDate(order.midtransData.settlementTime)}
            </Descriptions.Item>
          )}
          {order.transactionStatus && (
            <Descriptions.Item label="Status Transaksi">
              <Tag>{order.transactionStatus.toUpperCase()}</Tag>
            </Descriptions.Item>
          )}
          {order.midtransData?.paymentType && (
            <Descriptions.Item label="Metode Pembayaran">
              {order.midtransData.paymentType}
            </Descriptions.Item>
          )}
        </Descriptions>
      </Card>

      {/* Customer Information */}
      {order.customerDetails && (
        <Card title="Informasi Pelanggan" className="mb-6">
          <Descriptions column={{ xs: 1, sm: 2 }} bordered>
            <Descriptions.Item label="Nama">
              {order.customerDetails.name || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {order.customerDetails.email || '-'}
            </Descriptions.Item>
            {order.customerDetails.phone && (
              <Descriptions.Item label="Telepon">
                {order.customerDetails.phone}
              </Descriptions.Item>
            )}
            {order.customerDetails.address && (
              <Descriptions.Item label="Alamat" span={2}>
                {order.customerDetails.address}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>
      )}

      {/* Order Items */}
      <Card title="Item Pesanan" className="mb-6">
        <List
          dataSource={order.items || []}
          renderItem={(item, index) => (
            <List.Item>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">
                      {index + 1}. {item.name}
                    </div>
                    {item.product?.category && (
                      <div className="text-sm text-gray-500 mt-1">
                        Kategori: {item.product.category}
                      </div>
                    )}
                    <div className="text-sm text-gray-600 mt-1">
                      Jumlah: {item.quantity} × Rp {formatCurrency(item.price)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">
                      Rp {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
        <Divider />
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total Pembayaran:</span>
          <span className="text-blue-600">Rp {formatCurrency(order.totalAmount)}</span>
        </div>
      </Card>

      {/* Midtrans Data */}
      {order.midtransData && (
        <Card title="Detail Transaksi Midtrans" className="mb-6">
          <Descriptions column={{ xs: 1, sm: 2 }} bordered>
            {order.midtransData.transactionId && (
              <Descriptions.Item label="Transaction ID">
                <span className="font-mono text-sm">{order.midtransData.transactionId}</span>
              </Descriptions.Item>
            )}
            {order.midtransData.statusCode && (
              <Descriptions.Item label="Status Code">
                {order.midtransData.statusCode}
              </Descriptions.Item>
            )}
            {order.midtransData.grossAmount && (
              <Descriptions.Item label="Gross Amount">
                Rp {formatCurrency(order.midtransData.grossAmount)}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          type="primary"
          icon={<ShoppingOutlined />}
          onClick={() => navigate('/orders')}
          block
        >
          Kembali ke Riwayat Pesanan
        </Button>
        <Button
          icon={<HomeOutlined />}
          onClick={() => navigate('/')}
          block
        >
          Kembali ke Home
        </Button>
      </div>
    </div>
  );
}

export default OrderDetailPage;

