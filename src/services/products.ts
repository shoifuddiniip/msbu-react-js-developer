import axios from 'axios';

async function getData() {
  const options = {
    withCredentials: true, // Needed if using authentication
    headers: {
      accept: "application/json",
      "Content-Type" : "application/x-www-form-urlencoded",
      Authorization: `Bearer ff6w0jlfCdv59BK8l7swEuhQ8pGi`,
    },
  };

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
  const data = await getData();
  return data;
}
