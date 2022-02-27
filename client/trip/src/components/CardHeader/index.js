import React from 'react';
import { Typography, Input, Anchor } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledCardHeaderWrapper } from './style';

const Navbar = () => {
    const { Text, Title } = Typography;
    const { Link } = Anchor;

    return (
      <StyledCardHeaderWrapper>
        <Title level={4}>Best Destination</Title>
        <Anchor affix={false} className="header-card" >
          <Link href="#" title="view all" />
        </Anchor>
      </StyledCardHeaderWrapper>
    );
}

Navbar.propTypes = {
}

export default Navbar;