"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, Row, Col } from 'antd';
import getMovies from "../../services/home";
import NavBar from "../../components/NavBar";
import Image from "next/image";

const imageLoader = (path: string) => {
  return `https://image.tmdb.org/t/p/w500/${path}`
}


export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], //Array according to Documentation
  });


  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
      <NavBar selectedNav="rm" itemsBread={[{ title: 'Home' }, { title: 'Resume Medis' }]}>

        <Row gutter={[16, 24]}>
          {data?.results?.map((movie: { id: number; title: string; poster_path: string, overview: string, release_date: string }) => (
            <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
              <Card
                hoverable
                cover={<Image alt={movie.title} src={imageLoader(movie.poster_path)} />}
                style={{ backgroundColor: '#1a1a1a', color: 'white' }}
              >
                <Card.Meta
                  title={<div style={{ color: 'white' }}>{movie.title}</div>}
                  description={
                    <div style={{ color: 'white' }}>
                      <p>{movie.release_date}</p>
                      <p>{movie.overview}</p>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </NavBar>
    </>
  );
}