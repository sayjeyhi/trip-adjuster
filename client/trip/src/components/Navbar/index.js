import React from 'react';
import { Typography, Input } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledNavbarWrapper } from './style';

const Navbar = () => {
    const { Text } = Typography;
    return (
      <StyledNavbarWrapper>
        <Text className="active line">Bali</Text>
        <Text>Jakarta</Text>
        <Text>Bali</Text>
        <Text>Jakarta</Text>
        <Text>Bali</Text>
        <Text>Jakarta</Text>
        <Text >Bali</Text>
        <Text>Jakarta</Text>
        <Text>Bali</Text>
        <Text>Jakarta</Text>
        <Text >Bali</Text>
      </StyledNavbarWrapper>
    );
}

Navbar.propTypes = {
}

export default Navbar;