import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Typography } from 'antd';

import { StyledCardHeaderWrapper } from './style';

const CardHeader = ({ title, link }) => {
  const { Title } = Typography;

  return (
    <StyledCardHeaderWrapper>
      <Title level={5}>{title}</Title>
      <NavLink to={link} >
        view all
        </NavLink>
    </StyledCardHeaderWrapper>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
}

export default CardHeader;