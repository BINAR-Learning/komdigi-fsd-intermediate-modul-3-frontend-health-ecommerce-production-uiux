import { useState } from 'react';
import { Modal, Input, Button, Card, Avatar, Spin, message } from 'antd';
import { RobotOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';
import { getProductRecommendations, formatAIResponse } from '../services/aiService';

const { TextArea } = Input;

function AIChatbot({ visible, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya adalah asisten AI Health E-Commerce. Ceritakan keluhan atau kebutuhan kesehatan Anda, dan saya akan merekomendasikan produk yang tepat! 😊'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMsg = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      // Get AI recommendation
      const response = await getProductRecommendations(inputMessage);
      const formatted = formatAIResponse(response);

      // Add AI response
      const aiMsg = {
        role: 'assistant',
        content: formatted.message,
        products: formatted.products
      };
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      message.error('Maaf, terjadi kesalahan. Pastikan backend running di localhost:5000');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Maaf, saya mengalami kendala teknis. Silakan coba lagi atau hubungi customer service.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <RobotOutlined className="text-2xl text-blue-500" />
          <span>AI Assistant - Rekomendasi Produk</span>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <Avatar
                icon={msg.role === 'user' ? <UserOutlined /> : <RobotOutlined />}
                className={msg.role === 'user' ? 'bg-blue-500' : 'bg-green-500'}
              />
              <Card size="small" className="shadow-sm">
                <p className="mb-0">{msg.content}</p>
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-2 pt-2 border-t">
                    <p className="text-sm font-semibold mb-1">Produk Direkomendasikan:</p>
                    {msg.products.map((product, i) => (
                      <div key={i} className="text-sm text-gray-600">
                        • {product.name} - Rp {product.price?.toLocaleString('id-ID')}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-4">
            <div className="flex gap-2">
              <Avatar icon={<RobotOutlined />} className="bg-green-500" />
              <Card size="small">
                <Spin size="small" /> <span className="ml-2">Sedang berpikir...</span>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <TextArea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Contoh: Saya butuh vitamin untuk daya tahan tubuh..."
          autoSize={{ minRows: 2, maxRows: 4 }}
          disabled={loading}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSend}
          loading={loading}
          disabled={!inputMessage.trim()}
        >
          Kirim
        </Button>
      </div>
    </Modal>
  );
}

export default AIChatbot;

