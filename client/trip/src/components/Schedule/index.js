import React from 'react';
import { Row, Col } from 'antd';

import des4 from '../../assets/images/Destination-4.jpeg';
import des5 from '../../assets/images/Destination-5.jpeg';
import des6 from '../../assets/images/Destination-6.jpeg';

import { CalendarLightIcon } from '@iconbox/iconly'; 

import Header from './../Header';
import Search from './../Search';
import Navbar from './../Navbar';
import CardHeader from './../CardHeader';
import DestinationItems from './../DestinationItems';
import RecommendedCard from './../RecommendedCard';
import Footer from "./../Footer";

import { StyledScheduleWrapper } from './style';

const Schedule = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledScheduleWrapper>
            <Header title="Schedule"  />
            <CardHeader title="My Schedule" />
            <RecommendedCard image={des4} title="Pantai Nusa Penida" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <RecommendedCard image={des5} title="Pantai Tanah Lot" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <RecommendedCard image={des6} title="Pantai Nusa Dua" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <Footer title="schedule" />
          </StyledScheduleWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Schedule;