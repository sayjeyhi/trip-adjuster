import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import DestinationCard from '../DestinationCard';

import { StyledDestinationItemsWrapper } from './style';

const DestinationItems = () => {

    return (
      <StyledDestinationItemsWrapper>
        <Swiper slidesPerView={1.5} className="destination-items" >
          <SwiperSlide>
            <DestinationCard />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard />
          </SwiperSlide>
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