import React from 'react';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { StyledNavbarWrapper } from './style';

const Navbar = () => {

    return (
      <StyledNavbarWrapper>
        <Swiper slidesPerView={6.5} className="destination-items" >
          <SwiperSlide>
            <NavLink to="/" className="highlight" >Jakarta</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Surabaya</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Jakarta</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Bandung</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Jakarta</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Surabaya</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Jakarta</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Mayadana</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Jakarta</NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/" >Surabaya</NavLink>
          </SwiperSlide>
        </Swiper>
      </StyledNavbarWrapper>
    );
}

Navbar.propTypes = {
}

export default Navbar;