import axios from 'axios';

const PAYMENT_API_URL = 'http://localhost:5000/api/external/payment';

/**
 * Payment Service - Midtrans Integration
 * Handle payment creation dan verification
 */

export const createPayment = async (orderData) => {
  try {
    const response = await axios.post(`${PAYMENT_API_URL}/create`, {
      orderId: orderData.orderId || `ORDER-${Date.now()}`,
      amount: orderData.total,
      items: orderData.items.map(item => ({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      customerDetails: {
        name: orderData.customerName,
        email: orderData.customerEmail,
        phone: orderData.customerPhone,
        address: orderData.shippingAddress
      }
    });

    return response.data;
  } catch (error) {
    console.error('Payment creation error:', error);
    throw error;
  }
};

/**
 * Handle payment notification (webhook callback)
 */
export const handlePaymentNotification = async (notificationData) => {
  try {
    const response = await axios.post(`${PAYMENT_API_URL}/notification`, notificationData);
    return response.data;
  } catch (error) {
    console.error('Payment notification error:', error);
    throw error;
  }
};

/**
 * Check payment status
 */
export const checkPaymentStatus = async (orderId) => {
  try {
    const response = await axios.get(`${PAYMENT_API_URL}/status/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Payment status check error:', error);
    throw error;
  }
};

