import axios from 'axios';

async function getData() {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmZjNzE5NDBiYThlMjlkYjU5NjY1YTk3YzMwNGYwNSIsIm5iZiI6MTczODE1MjA1My4xNjUsInN1YiI6IjY3OWExODc1ZjA1YjY0NzE0YmE5NzNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CMannbp1Ra5ZN4Gm8eKgynFLtx7XpAbou96ceGU8hk",
    },
  };

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

export default async function getMovies() {
  const data = await getData();
  return data;
}
