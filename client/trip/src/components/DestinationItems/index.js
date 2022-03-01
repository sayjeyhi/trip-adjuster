import React from 'react';
import { Typography, Anchor } from 'antd';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import DestinationCard from '../DestinationCard';

import { StyledDestinationItemsWrapper, 
       } from './style';

const DestinationItems = () => {

    return (
      <StyledDestinationItemsWrapper>
        <Swiper slidesPerView={1.5} >
          <SwiperSlide>
            <DestinationCard />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard />
          </SwiperSlide>
      </Swiper>
      </StyledDestinationItemsWrapper>
    );
}

DestinationItems.propTypes = {
}

export default DestinationItems;