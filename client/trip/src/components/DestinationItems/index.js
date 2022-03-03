import React from 'react';
import { useQuery } from "@apollo/client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import DestinationCard from '../DestinationCard';
import { getDestinationsQuery } from '../queries/index';

import { StyledDestinationItemsWrapper, StyledLoadingWrapper } from './style';

const DestinationItems = () => {

  const { loading, error, data } = useQuery(getDestinationsQuery);
  
  if (!loading) {
    const destinations = data.destinations;
    return (
      <StyledDestinationItemsWrapper>
        <Swiper slidesPerView={1.5} className="destination-items" >
          {destinations.map(item => (
            <SwiperSlide>
              <DestinationCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledDestinationItemsWrapper>
    );
  } else {
    return (
      <StyledLoadingWrapper>
        ... loading
      </StyledLoadingWrapper>
    )
  }
}

DestinationItems.propTypes = {
}

export default DestinationItems;