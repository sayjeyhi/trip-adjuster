import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Input, Anchor } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledCardHeaderWrapper } from './style';

const CardHeader = ({title}) => {
    const { Text, Title } = Typography;
    const { Link } = Anchor;

    return (
      <StyledCardHeaderWrapper>
        <Title level={5}>{title}</Title>
        <Anchor affix={false} className="header-card" >
          <Link href="#" title="view all" />
        </Anchor>
      </StyledCardHeaderWrapper>
    );
}

CardHeader.propTypes = {
  title: PropTypes.string,
}

export default CardHeader;