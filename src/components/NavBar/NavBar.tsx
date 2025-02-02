"use client";

import React from 'react';
import { 
  DesktopOutlined, 
  // NotificationOutlined, 
  // UserOutlined, 
  FileDoneOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import logoSatuSehat from '../../assets/logo-satusehat.png';
import styles from './navbar.module.css';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = [
  { id: '1', name: 'Beranda' },
  { id: '2', name: 'Produk' },
  { id: '3', name: 'Mitra' },
  { id: '4', name: 'Pusat Bantuan' }
].map((data) => ({
  key: data.id,
  label: data.name,
}));

interface Props {
  children: React.ReactNode,
  selectedNav: string,
  itemsBread: BreadItemNav[],
}

const Navbar: React.FC<Props> = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();

  const items2: MenuProps['items'] = [
    { name: 'Resume Medis', icon: FileDoneOutlined, key: 'rm', link: '/resume-medis' },
    { name: 'Catatan Kesehatan', icon: FileDoneOutlined, key: 'ck', link: '/catatan-kesehatan' },
    { name: 'Deteksi Resiko Penyakit', icon: ExperimentOutlined, key: 'drp', link: '/deteksi-risiko-penyakit' },
    { name: 'Vaksinasi & Imunisasi', icon: ExperimentOutlined, key: 'vi', link: '/vaksinasi-dan-imunisasi' },
    { name: 'Kesehatan Anak', icon: FileDoneOutlined, key: 'ka', link: '/kesehatan-anak' },
    { name: 'Kesehatan Kehamilan', icon: FileDoneOutlined, key: 'kk', link: '/kesehatan-kehamilan' },
    { name: 'Covid 19', icon: ExperimentOutlined, key: 'c19', link: '/covid-19' },
    { name: 'Cari Layanan Kesehatan', icon: ExperimentOutlined, key: 'cls', link: '/cari-layanan-kesehatan' },
    { name: 'Layanan Obat dan Vitamin', icon: DesktopOutlined, key: 'lov', link: '/layanan-obat-dan-vitamin' },
  ].map(
    (data) => {
      return {
        key: data.key,
        icon: React.createElement(data.icon),
        label: data.name,
        onClick: () =>  router.push(data.link),
      };
    },
  );


  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
        <div
          style={{
            display: 'grid',
            flex: 1,
            gridTemplateColumns: '10% 75% 1fr',
            background: colorBgContainer,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={styles.logo}>
            <Image src={logoSatuSehat} alt="Satu Sehat" />
          </div>
          <div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ flex: 1, minWidth: 0 }}
              items={items1}
            />
          </div>
          <div></div>
        </div>
      </Header>
      <Layout>
        <Sider width={270} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[props.selectedNav]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={props.itemsBread}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Navbar;