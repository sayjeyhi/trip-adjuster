import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';

import Header from '../../Common/Header';
import Footer from '../../Common/Footer'; 
import RecommendedCard from './partials/RecommendedCard';

import des1 from '../../../assets/images/Destination-1.jpeg';
import des2 from '../../../assets/images/Destination-2.jpeg';
import des3 from '../../../assets/images/Destination-3.jpeg';
import des4 from '../../../assets/images/Destination-4.jpeg';
import des5 from '../../../assets/images/Destination-5.jpeg';
import des6 from '../../../assets/images/Destination-6.jpeg';
import des7 from '../../../assets/images/Destination-7.jpeg';

import { StyledRecommendedWrapper, StyledContentWrapper } from './style';

const Recommended = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    } 
  },[])  

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15} >
          <StyledRecommendedWrapper>
            <Header type="Recommended" title="Recommended" />
            <StyledContentWrapper>
              <RecommendedCard image={des1} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des2} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des3} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des4} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des5} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des6} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <RecommendedCard image={des7} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
            </StyledContentWrapper>
            <Footer />
          </StyledRecommendedWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Recommended;