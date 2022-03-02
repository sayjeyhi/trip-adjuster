import React from 'react';
import { NavLink } from "react-router-dom";
import { Image, Typography, Anchor } from 'antd';
import { LocationCurvedIcon, StarCurvedIcon } from '@iconbox/iconly'; 
import des5 from '../../assets/images/Destination-5.jpeg';

import { StyledCardWrapper, 
         StyledCardImage, 
         StyledCardDetails, 
         StyledCardTitle, 
         StyledRateItem,
         StyledPriceItem, 
       } from './style';

const DestinationCard = () => {

    const { Text, Title } = Typography;
    const { Link } = Anchor;

    return (
      <StyledCardWrapper className="destination-card">
        <StyledCardImage>
          <Image
            src={des5}
          />
          <StyledPriceItem>
            <Text>
              $ 20
            </Text>
          </StyledPriceItem>
        </StyledCardImage>
        <StyledCardDetails>
          <StyledCardTitle>
            <NavLink to="details/?id=3" >
              <Title level={5}>Bukit Raya</Title>
            </NavLink>
            <Text>
              <LocationCurvedIcon />
              Indonesia, Bali
            </Text>
          </StyledCardTitle>
          <StyledRateItem>
            <Text>
              <StarCurvedIcon />
              4.8
            </Text>
          </StyledRateItem>
        </StyledCardDetails>
      </StyledCardWrapper>
    );
}

DestinationCard.propTypes = {
}

export default DestinationCard;