import React from 'react';
import { Image, Typography, Anchor } from 'antd';
import { LocationCurvedIcon, StarCurvedIcon } from '@iconbox/iconly'; 
import des2 from '../../assets/images/Destination-2.jpeg';

import { StyledCardWrapper, 
         StyledCardImage, 
         StyledCardDetails, 
         StyledCardTitle, 
         StyledRateItem,
         StyledPriceItem, 
       } from './style';

const RecommendedCard = () => {

    const { Text, Title } = Typography;
    const { Link } = Anchor;

    return (
      <StyledCardWrapper>
        <StyledCardImage>
          <Image
            width={210}
            src={des2}
          />
        </StyledCardImage>
        <StyledCardDetails>
          <StyledCardTitle>
            <Text>
              12Km * 1 h 30 min
            </Text>
            <Title level={5}>Pantai Nusa Penida</Title>
            <Text>
              <LocationCurvedIcon />
              Indonesia, Bali
            </Text>
          </StyledCardTitle>
          <StyledPriceItem>
            <Text>
              $ 20
            </Text>
          </StyledPriceItem>
        </StyledCardDetails>
      </StyledCardWrapper>
    );
}

RecommendedCard.propTypes = {
}

export default RecommendedCard;