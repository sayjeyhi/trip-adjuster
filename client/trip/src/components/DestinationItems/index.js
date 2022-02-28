import React from 'react';
import { Image, Typography, Anchor } from 'antd';
import { LocationCurvedIcon, StarCurvedIcon } from '@iconbox/iconly'; 

import DestinationCard from '../DestinationCard';
import des3 from '../../assets/images/Destination-3.jpeg';

import { StyledDestinationItemsWrapper, 
       } from './style';

const DestinationItems = () => {

    const { Text, Title } = Typography;
    const { Link } = Anchor;

    return (
      <StyledDestinationItemsWrapper>
        <DestinationCard />
        <DestinationCard />
      </StyledDestinationItemsWrapper>
    );
}

DestinationItems.propTypes = {
}

export default DestinationItems;