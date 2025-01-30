import axios from 'axios';
import { TOKEN } from './token';

async function getData(pageParam?: number) {
  const options = {
    withCredentials: true, // Needed if using authentication
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const size = 10;
  pageParam = 1;

  const queryParams = new URLSearchParams({ page: pageParam.toString(), size: size.toString(), product_type: 'farmasi' });

  try {
    const response = await axios.get(
      `https://api-satusehat-stg.dto.kemkes.go.id/kfa-v2/products/all?page=2&size=10&product_type=farmasi`,
      options
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

export default async function getProducts() {
  const data = await getData(1);
  return data;
}
