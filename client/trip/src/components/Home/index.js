import React from 'react';
import { Row, Col } from 'antd';

import des1 from '../../assets/images/Destination-1.jpeg';

import Header from './../Header';
import Search from './../Search';
import Navbar from './../Navbar';
import CardHeader from './../CardHeader';
import DestinationItems from './../DestinationItems';
import RecommendedCard from './../RecommendedCard';
import Footer from "./../Footer";

import { StyledHomeWrapper } from './style';

const Home = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledHomeWrapper>
            <Header type="profile" title="Schedule"  />
            <Search />
            <Navbar />
            <CardHeader title="Best Destination" link="/destinations" />
            <DestinationItems />
            <CardHeader title="Recommended" link="/recommended" />
            <RecommendedCard image={des1} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
            <Footer title="home" />
          </StyledHomeWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Home;