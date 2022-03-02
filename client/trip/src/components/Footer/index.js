import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Typography } from 'antd';
import { HomeCurvedIcon, TicketStarLightIcon, CalendarLightIcon, AddUserCurvedIcon } from '@iconbox/iconly';

import { StyledFooterWrapper } from './style';

const Footer = ({title}) => {
    const { Text } = Typography;

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
        <NavLink to="/user" className={title === 'user' && 'active'} >
          <AddUserCurvedIcon size={2} />
        </NavLink>
      </StyledFooterWrapper>
    );
}

Footer.propTypes = {
  title: PropTypes.string,
}

export default Footer;