import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

import { StyledCardHeaderWrapper } from './style';

const CardHeader = ({ title, link }) => {
  const { Title } = Typography;
  const { t } = useTranslation();

  return (
    <StyledCardHeaderWrapper>
      <Title level={5}>{title}</Title>
      <NavLink to={link}>{t('viewAll')}</NavLink>
    </StyledCardHeaderWrapper>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default CardHeader;
