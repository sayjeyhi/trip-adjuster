import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Anchor } from 'antd';
import { HomeCurvedIcon, TicketStarLightIcon, CalendarLightIcon, AddUserCurvedIcon } from '@iconbox/iconly';
import { PersonOutlineIcon } from '@iconbox/eva';

import { StyledFooterWrapper } from './style';

const Footer = ({title}) => {
    const { Text } = Typography;
    const { Link } = Anchor;

    return (
      <StyledFooterWrapper>
        <Anchor affix={false} className="header-card" >
          <Link href="/" title={<HomeCurvedIcon size={2} />} className={title === 'home' && 'active'} />
          <Link href="#" title={<TicketStarLightIcon size={2} />} className={title === 'tag' && 'active'} />
          <Link href="/schedule" title={<CalendarLightIcon size={2} />} className={title === 'schedule' && 'active'} />
          <Link href="#" title={<AddUserCurvedIcon size={2} />} className={title === 'user' && 'active'} />
        </Anchor>
      </StyledFooterWrapper>
    );
}

Footer.propTypes = {
  title: PropTypes.string,
}

export default Footer;