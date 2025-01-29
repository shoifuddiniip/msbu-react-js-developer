"use client";

import { useQuery } from "@tanstack/react-query";
import { Button, Card, Row, Col } from 'antd';
import getMovies from "../../services/home";


export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], //Array according to Documentation
  });

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    // <div className="container mx-auto">
    //   <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
    //     React Query Movies
    //   </h1>
    //   <Button type="primary"/>
    //   <div className="grid grid-cols-4 gap-4 p-10">
    //     {data?.results?.map(
    //       (movie: { id: number; title: string; poster_path: string }, idx: number) => {
    //         return (
    //           <Card key={idx} style={{maxWidth: 100}}>
    //             <div>{"movie" + movie.id}</div>
    //             <div>{movie.title}</div>
    //             <div>{movie.poster_path}</div>
    //           </Card>
    //         );
    //       }
    //     )}
    //   </div>
    // </div>
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h1 className="p-5" style={{ background: 'linear-gradient(to right, #4c6ef5, #d03a6d)', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
      React Query Movies
    </h1>

    <Button type="primary" style={{ marginBottom: '20px' }}>Add Movie</Button>

    <Row gutter={[16, 24]}>
      {data?.results?.map((movie: { id: number; title: string; poster_path: string, overview:string, release_date: string }) => (
        <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
          <Card
            hoverable
            cover={<img alt={movie.title} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} />}
            style={{ backgroundColor: '#1a1a1a', color: 'white' }}
          >
            <Card.Meta
              title={movie.title}
              description={
                <div>
                  <p>{movie.release_date}</p>
                  <p>{movie.overview}</p>
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>

  );
}