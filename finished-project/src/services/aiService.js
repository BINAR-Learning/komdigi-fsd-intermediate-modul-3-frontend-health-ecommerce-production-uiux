import axios from 'axios';

const AI_API_URL = 'http://localhost:5000/api/external/ai';

/**
 * AI Chatbot Service - Google Gemini Integration
 * Mendapatkan rekomendasi produk kesehatan berdasarkan keluhan user
 */

export const getProductRecommendations = async (userMessage) => {
  try {
    const response = await axios.post(`${AI_API_URL}/chat`, {
      message: userMessage,
      context: 'health_product_recommendation'
    });

    return response.data;
  } catch (error) {
    console.error('AI recommendation error:', error);
    throw error;
  }
};

/**
 * Format AI response untuk display
 */
export const formatAIResponse = (response) => {
  if (!response || !response.recommendations) {
    return {
      message: 'Maaf, saya tidak bisa memberikan rekomendasi saat ini.',
      products: []
    };
  }

  return {
    message: response.message || 'Berikut rekomendasi produk untuk Anda:',
    products: response.recommendations || [],
    confidence: response.confidence || 0.8
  };
};

