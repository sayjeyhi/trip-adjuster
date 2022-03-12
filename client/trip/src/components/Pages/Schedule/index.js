import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Row, Col } from 'antd';
import DatePicker from 'sassy-datepicker';

import { CalendarLightIcon } from '@iconbox/iconly';
import { TicketIcon } from '@iconbox/jamicons';

import Header from '../../Common/Header';
import CardHeader from '../../Common/CardHeader';
import RecommendedCard from '../Recommended/partials/RecommendedCard';
import Footer from '../../Common/Footer';

import des4 from '../../../assets/images/Destination-4.jpeg';
import des5 from '../../../assets/images/Destination-5.jpeg';
import des6 from '../../../assets/images/Destination-6.jpeg';

import {
  StyledScheduleWrapper,
  StyledDatePickerWrapper,
  StyledRecommentCardWrapper,
  StyledIconWrapper,
} from './style';

const Schedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    }
  }, []);

  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <>
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15}>
          <StyledScheduleWrapper>
            <Header title="Schedule" type="Schedule" />
            <StyledDatePickerWrapper>
              <DatePicker onChange={onChange} />
            </StyledDatePickerWrapper>
            <CardHeader title="My Schedule" link="/recommended" />
            <StyledRecommentCardWrapper>
              <RecommendedCard
                image={des4}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Nusa Penida"
                text={[<CalendarLightIcon key="1" />, '22 jun 2022']}
              />
              <RecommendedCard
                image={des5}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Tanah Lot"
                text={[<CalendarLightIcon key="2" />, '22 jun 2022']}
              />
              <RecommendedCard
                image={des6}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Nusa Dua"
                text={[<CalendarLightIcon key="3" />, '22 jun 2022']}
              />
              <RecommendedCard
                image={des4}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Nusa Penida"
                text={[<CalendarLightIcon key="4" />, '22 jun 2022']}
              />
              <RecommendedCard
                image={des5}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Tanah Lot"
                text={[<CalendarLightIcon key="5" />, '22 jun 2022']}
              />
              <RecommendedCard
                image={des6}
                icon={
                  <StyledIconWrapper>
                    <TicketIcon size={2.5} />
                  </StyledIconWrapper>
                }
                title="Pantai Nusa Dua"
                text={[<CalendarLightIcon key="6" />, '22 jun 2022']}
              />
            </StyledRecommentCardWrapper>
            <Footer title="schedule" />
          </StyledScheduleWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Schedule;
