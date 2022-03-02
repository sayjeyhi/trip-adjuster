import React from 'react';
import { Row, Col } from 'antd';

import DatePicker from 'sassy-datepicker';

import des4 from '../../assets/images/Destination-4.jpeg';
import des5 from '../../assets/images/Destination-5.jpeg';
import des6 from '../../assets/images/Destination-6.jpeg';

import { CalendarLightIcon, TicketStarLightIcon } from '@iconbox/iconly'; 

import Header from './../Header';
import CardHeader from './../CardHeader';
import RecommendedCard from './../RecommendedCard';
import Footer from "./../Footer";

import { StyledScheduleWrapper, StyledDatePickerWrapper } from './style';

const Schedule = () => {

  const onChange = (date) => {
    console.log(date.toString());
  };

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledScheduleWrapper>
            <Header title="Schedule" type="Schedule" />
            <StyledDatePickerWrapper>
              <DatePicker onChange={onChange} />
            </StyledDatePickerWrapper>
            <CardHeader title="My Schedule" link="/recommended" />
            <RecommendedCard image={des4} icon={<TicketStarLightIcon />} title="Pantai Nusa Penida" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <RecommendedCard image={des5} icon={<TicketStarLightIcon />} title="Pantai Tanah Lot" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <RecommendedCard image={des6} icon={<TicketStarLightIcon />} title="Pantai Nusa Dua" text={[<CalendarLightIcon />, "22 jun 2022"]} />
            <Footer title="schedule" />
          </StyledScheduleWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Schedule;