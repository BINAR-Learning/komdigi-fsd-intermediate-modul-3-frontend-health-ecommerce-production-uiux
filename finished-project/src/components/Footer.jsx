import { Layout } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter className="text-center bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-6">
        <p className="mb-2">
          © 2024 Health E-Commerce - Platform Terpercaya untuk Produk Kesehatan
        </p>
        <p className="text-sm text-gray-400">
          Built with <HeartOutlined className="text-red-500" /> using MERN Stack
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Powered by Google Gemini AI • Midtrans Payment • Kemenkes API
        </p>
      </div>
    </AntFooter>
  );
}

export default Footer;

