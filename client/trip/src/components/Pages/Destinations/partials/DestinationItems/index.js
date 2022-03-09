import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import DestinationCard from '../DestinationCard';
import { context } from '../../../../context/destinationContext';

import { StyledDestinationItemsWrapper } from './style';

const DestinationItems = () => {

  const {destinations} = useContext(context);
  
    return (
      <StyledDestinationItemsWrapper>
        <Swiper slidesPerView={1.5} className="destination-items" >
          {destinations.map((item,index) => (
            <SwiperSlide key={index} >
              <DestinationCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledDestinationItemsWrapper>
    );
}

DestinationItems.propTypes = {
  destinations: PropTypes.object,
}

export default DestinationItems;