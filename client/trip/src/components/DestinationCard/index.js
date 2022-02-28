import React from 'react';
import { Image, Typography, Anchor } from 'antd';
import { LocationCurvedIcon, StarCurvedIcon } from '@iconbox/iconly'; 
import des3 from '../../assets/images/Destination-3.jpeg';

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
      <StyledCardWrapper>
        <StyledCardImage>
          <Image
            width={210}
            src={des3}
          />
          <StyledPriceItem>
            <Text>
              $ 20
            </Text>
          </StyledPriceItem>
        </StyledCardImage>
        <StyledCardDetails>
          <StyledCardTitle>
            <Title level={5}>Bukit Raya</Title>
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