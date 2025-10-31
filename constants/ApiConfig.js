/**
 * API Configuration
 * 
 * Centralizes all API endpoints and configurations.
 * Uses environment variables when available, falls back to defaults.
 */

const getEnvVar = (key, defaultValue) => {
  // In React Native with Expo, environment variables need to be accessed differently
  // For now, using defaults. To use env vars, consider expo-constants or dotenv
  return defaultValue;
};

export const API_CONFIG = {
  // Base URLs
  DATA_API_URL: getEnvVar('API_BASE_URL', 'http://localhost:3000'),
  CHAT_API_URL: getEnvVar('CHAT_API_URL', 'http://localhost:8001'),
  SOCKET_URL: getEnvVar('SOCKET_URL', 'http://localhost:4000'),
  
  // Endpoints
  ENDPOINTS: {
    DATA: '/data',
    CHAT_COMPLETIONS: '/v1/chat/completions',
  },
  
  // Timeouts (in milliseconds)
  TIMEOUT: {
    DEFAULT: 30000,
    CHAT: 60000,
  },
  
  // Retry configuration
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000,
  },
};

export default API_CONFIG;
