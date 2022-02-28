import React from 'react';
import { Typography, Anchor } from 'antd';
import { HomeCurvedIcon, TicketStarLightIcon, CalendarLightIcon, AddUserCurvedIcon } from '@iconbox/iconly';
import { PersonOutlineIcon } from '@iconbox/eva';

import { StyledFooterWrapper } from './style';

const Footer = () => {
    const { Text } = Typography;
    const { Link } = Anchor;

    return (
      <StyledFooterWrapper>
        <Anchor affix={false} className="header-card" >
          <Link href="#" title={<HomeCurvedIcon size={2} />} className="active" />
          <Link href="#" title={<TicketStarLightIcon size={2} />} />
          <Link href="#" title={<CalendarLightIcon size={2} />} />
          <Link href="#" title={<AddUserCurvedIcon size={2} />} />
        </Anchor>
      </StyledFooterWrapper>
    );
}

Footer.propTypes = {
}

export default Footer;