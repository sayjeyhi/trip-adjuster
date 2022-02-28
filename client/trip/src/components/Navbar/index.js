import React from 'react';
import { Typography, Anchor } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledNavbarWrapper } from './style';

const Navbar = () => {
    const { Text } = Typography;
    const { Link } = Anchor;

    return (
      <StyledNavbarWrapper>
        <Anchor affix={false} className="header-card" >
          <Link href="#" title="Jakarta" className="active" />
          <Link href="#" title="Bali" />
          <Link href="#" title="Jakarta" />
          <Link href="#" title="Bali" />
          <Link href="#" title="Jakarta" />
          <Link href="#" title="Bali" />
          <Link href="#" title="Jakarta" />
          <Link href="#" title="Bali" />
          <Link href="#" title="Jakarta" />
          <Link href="#" title="Bali" />
        </Anchor>
      </StyledNavbarWrapper>
    );
}

Navbar.propTypes = {
}

export default Navbar;