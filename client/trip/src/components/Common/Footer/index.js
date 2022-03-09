import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { HomeCurvedIcon, TicketStarLightIcon, CalendarLightIcon, AddUserCurvedIcon } from '@iconbox/iconly';

import { StyledFooterWrapper } from './style';

const Footer = ({title}) => {

    return (
      <StyledFooterWrapper className="footer">
        <NavLink to="/" className={title === 'home' && 'active'} >
          <HomeCurvedIcon size={2} />
        </NavLink>
        <NavLink to="/discounts" className={title === 'tag' && 'active'} >
          <TicketStarLightIcon size={2} />
        </NavLink>
        <NavLink to="/schedule" className={title === 'schedule' && 'active'} >
          <CalendarLightIcon size={2} />
        </NavLink>
        <NavLink to="/login" className={title === 'user' && 'active'} >
          <AddUserCurvedIcon size={2} />
        </NavLink>
      </StyledFooterWrapper>
    );
}

Footer.propTypes = {
  title: PropTypes.string,
}

export default Footer;