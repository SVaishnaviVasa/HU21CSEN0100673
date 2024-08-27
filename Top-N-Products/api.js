import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM1MjQxLCJpYXQiOjE3MjQ3MzQ5NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFlZTlkYzZhLTEzNGEtNGQ1Yy1iNzIxLTA5MDE2YzhhOTE4YSIsInN1YiI6InN2YXNhQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJhZWU5ZGM2YS0xMzRhLTRkNWMtYjcyMS0wOTAxNmM4YTkxOGEiLCJjbGllbnRTZWNyZXQiOiJiSUhlbWhUa29yYXFnaXZZIiwib3duZXJOYW1lIjoiU3JpIFZhaXNobmF2aSBWYXNhIiwib3duZXJFbWFpbCI6InN2YXNhQGdpdGFtLmluIiwicm9sbE5vIjoiSFUyMUNTRU4wMTAwNjczIn0.VXiyOb420W4AeKr1W5VpD8-0moCjeEyjr_gucVxe6lA';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${BASE_URL}/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return [];
  }
};
