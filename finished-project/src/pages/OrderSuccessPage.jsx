import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';

function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <Result
        icon={<CheckCircleOutlined className="text-green-500" />}
        status="success"
        title="Pembayaran Berhasil!"
        subTitle="Pesanan Anda telah kami terima dan sedang diproses. Terima kasih telah berbelanja!"
        extra={[
          <Button type="primary" key="products" onClick={() => navigate('/products')}>
            Lanjut Belanja
          </Button>,
          <Button key="home" onClick={() => navigate('/')}>
            Kembali ke Home
          </Button>,
        ]}
      >
        <div className="bg-gray-50 p-6 rounded max-w-md mx-auto">
          <p className="text-sm text-gray-600 mb-2">
            📧 Konfirmasi pesanan telah dikirim ke email Anda
          </p>
          <p className="text-sm text-gray-600 mb-2">
            📦 Estimasi pengiriman: 2-3 hari kerja
          </p>
          <p className="text-sm text-gray-600">
            💬 Hubungi customer service jika ada pertanyaan
          </p>
        </div>
      </Result>
    </div>
  );
}

export default OrderSuccessPage;

