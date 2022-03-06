import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";

import { context } from '../../context/destinationContext';

import { StyledNavbarWrapper } from './style';

const Navbar = () => {

  const [active, setActive] = useState(0);
  const { destinations, setDestinations, citiesTitle, destCards } = useContext(context);

  const handleDestinationFilter = (city,id) => {
    const filteredDestinations = destCards.filter(item => item.city === city);
    setDestinations(filteredDestinations);
    setActive(id);
  }

    return (
      <StyledNavbarWrapper>
        {citiesTitle.map((item,index) => (
              <NavLink key={index} to="/" className={`${active === index ? "highlight" : ""}`} onClick={() => handleDestinationFilter(item,index)} >{item}</NavLink>
        
          ))}
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