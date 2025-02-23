"use client";

import React, { useState } from 'react';
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, Col, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import TruncatedText from "../../components/elements/TruncatedText";
import card1 from "@/assets/healthcare2.svg";

const desc = "This is column forLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel neque id sapien mattis egestas. Praesent imperdiet tellus vitae finibus ultrices. Morbi tempor sapien nec risus pharetra, vitae commodo magna semper. ";
const data = [
  { id: 1, title: "Vitamin D", description: desc, image: card1, link: "" },
  { id: 2, title: "Vitamin C", description: desc, image: card1, link: "" },
  { id: 3, title: "Vitamin B", description: desc, image: card1, link: "" },
];

export default function MedicineServices() {
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (id: number, link: string) => {
    setSelectedCard(id);
    router.push(link);
  };

  return (
    <>
      <NavBar selectedNav="lov" itemsBread={[{ title: 'Home' }, { title: 'Layanan Obat dan Vitamin' }, { title: 'Cari Obat' }]}>
        <Row gutter={[16, 16]}>
          {data.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  onClick={() => handleCardClick(item.id, item.link)}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  cover={
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        position: "relative",
                        aspectRatio: "16/9",
                        marginTop: 20,
                      }}>
                      <Image
                        loading="eager"
                        alt={item.title}
                        src={item.image}
                        layout="fill"
                        sizes="(max-width: 600px) 100vw, 50vw"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
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
                  <TruncatedText text={item.description} size={50} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </NavBar>
    </>
  );
}
