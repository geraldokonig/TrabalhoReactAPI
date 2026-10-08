import axios from 'axios';

// Configuração base da API
export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

// Função para formatar preços no padrão de moeda brasileira (ex: R$ 199,90)
export const formatPrice = (price) => {
  if (price === undefined || price === null) return 'R$ 0,00';
  return `R$ ${Number(price).toFixed(2).replace('.', ',')}`;
};