import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context } from '../context/destinationContext';

import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { StyledNavbarWrapper } from './style';

const Navbar = () => {

  const { destinations, setDestinations, citiesTitle, destCards } = useContext(context);

  const handleDestinationFilter = (city) => {
    const filteredDestinations = destCards.filter(item => item.city === city);
    setDestinations(filteredDestinations);
  }

    return (
      <StyledNavbarWrapper>
        <Swiper slidesPerView={6.5} className="destination-items" >
          {citiesTitle.map((item,index) => (
            <SwiperSlide id={item}>
              <NavLink to="/" onClick={() => handleDestinationFilter(item)} >{item}</NavLink>
          </SwiperSlide>
          ))}
        </Swiper>
      </StyledNavbarWrapper>
    );
}

Navbar.propTypes = {
  destinations: PropTypes.object,
  setDestinations: PropTypes.func,
  citiesTitle: PropTypes.array,
  destCards: PropTypes.array,
}

export default Navbar;