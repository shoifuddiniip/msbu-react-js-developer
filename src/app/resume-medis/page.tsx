"use client";

import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import NavBar from "../../components/NavBar";
import getProducts from '../../services/products';
import styles from './resumemedis.module.css';

const { Meta } = Card;

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}


export default function Home() {
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

  return (
    <>
      <NavBar selectedNav="rm" itemsBread={[{ title: 'Home' }, { title: 'Test' }]}>
        Test
        {/* <div className={styles.container} onScroll={handleScroll}>
          <Row gutter={16}> */}
            {/* {data?.pages.map((page) =>
              page.map((product: Product) => (
                <Col span={8} key={product.id}>
                  <Card
                    hoverable
                    cover={<img alt={product.name} src={product.imageUrl || 'https://via.placeholder.com/150'} />}
                    className={styles.cardWrapper}
                  >
                    <Meta title={product.name} description={product.description} />
                  </Card>
                </Col>
              ))
            )} */}
          {/* </Row>
          {(isLoading || isFetching) && (
            <div className={styles.loading}>
              <Spin tip="Loading more products..." />
            </div>
          )}
          {!hasNextPage && <div>No more products to load.</div>}
        </div> */}

      </NavBar>
    </>
  );
}
