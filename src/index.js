// Agent Marketplace Components
// Reusable React components for building agent marketplace applications

export { AgentCard } from './AgentCard';
export { default } from './AgentCard';

// Theme constants
export const theme = {
  colors: {
    background: {
      primary: '#0a0a0f',
      secondary: '#12121a',
      tertiary: '#1a1a2e',
    },
    accent: {
      primary: '#00d4aa',
      secondary: '#7c3aed',
    },
    text: {
      primary: '#f0f0f5',
      secondary: '#8888a0',
    },
    border: '#2a2a3e',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'DM Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
};

// API utilities
export const API_BASE = 'http://localhost:3001/api';

export async function fetchAgents(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}/agents${queryString ? '?' + queryString : ''}`);
  return response.json();
}

export async function deployAgent(agentId, config = {}) {
  const response = await fetch(`${API_BASE}/deploy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ agentId, config }),
  });
  return response.json();
}

export async function fetchDeployed() {
  const response = await fetch(`${API_BASE}/deployed`);
  return response.json();
}

export async function fetchStats() {
  const response = await fetch(`${API_BASE}/stats`);
  return response.json();
}
