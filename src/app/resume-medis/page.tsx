"use client";

import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query'
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, Col, Row } from "antd";
import card1 from "@/assets/DNA.svg";
import card2 from "@/assets/healthpass.svg";
import card3 from "@/assets/admision.svg";
import card4 from "@/assets/radiography.svg";


// const data = [
//   { id: 1, title: "Satu DNA", description: "This is the first card.", image: "@/assets/logo-satusehat.png", link: "/details/1" },
//   { id: 2, title: "Healt Pass", description: "This is the second card.", image: "/images/card2.jpg", link: "/details/2" },
//   { id: 3, title: "Rawat Jalan", description: "This is the third card.", image: "/images/card3.jpg", link: "/details/3" },
//   { id: 4, title: "Test Lab & Radiologi", description: "This is the fourth card.", image: "/images/card4.jpg", link: "/details/4" },
// ];

const data = [
  { id: 1, title: "Satu DNA", description: "This is the first card.", image: card1, link: "/details/1" },
  { id: 2, title: "Healt Pass", description: "This is the second card.", image: card2, link: "/details/2" },
  { id: 3, title: "Rawat Jalan", description: "This is the third card.", image: card3, link: "/details/3" },
  { id: 4, title: "Test Lab & Radiologi", description: "This is the fourth card.", image: card4, link: "/details/4" },
];


export default function Home() {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
  //   queryKey:['products'],
  //   queryFn: getProducts,
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage:any) => lastPage.nextCursor,
  //   getPreviousPageParam: (firstPage:any) => firstPage.prevCursor,
  // })

  // const handleScroll = (e: React.UIEvent<HTMLElement>) => {
  //   const bottom = e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight;
  //   if (bottom && hasNextPage && !isFetching) {
  //     fetchNextPage();
  //   }
  // };

  // const { data, isLoading, isError } = useQuery({
  //   queryFn: async () => await getProducts(),
  //   queryKey: ["movies"], //Array according to Documentation
  // });
  const router = useRouter();

  const handleCardClick = (id: number, link: string) => {
    setSelectedCard(id);
    router.push(link);
  };

  return (
    <>
      <NavBar selectedNav="rm" itemsBread={[{ title: 'Home' }, { title: 'Resume Medis' }]}>
        <Row gutter={[16, 16]}>
          {data.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  onClick={() => handleCardClick(item.id, item.link)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  cover={
                    <div style={{ width: "100%", height: "auto", position: "relative", aspectRatio: "16/9", marginTop:20 }}>
                      <Image alt={item.title} src={item.image} layout="fill" sizes="(max-width: 600px) 100vw, 50vw" style={{ borderRadius: "8px" }} />
                    </div>
                  }
                  title={item.title}
                  bordered={false}
                  style={{
                    cursor: "pointer",
                    boxShadow: selectedCard === item.id ? "0px 6px 20px rgba(0, 0, 0, 0.3)" : hoveredCard === item.id ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    backgroundColor: selectedCard === item.id ? "#e6f7ff" : hoveredCard === item.id ? "#f0f8ff" : "#fff",
                    transform: hoveredCard === item.id ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <p>{item.description}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </NavBar>
    </>
  );
}
