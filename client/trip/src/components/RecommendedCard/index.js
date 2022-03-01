import React from 'react';
import PropTypes from 'prop-types';
import { Image, Typography } from 'antd';
import { LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledCardWrapper, 
         StyledCardImage, 
         StyledCardDetails, 
         StyledCardTitle,
         StyledPriceItem, 
         StyledIconWrapper,
       } from './style';

const RecommendedCard = ({image, title, icon, text}) => {

    const { Text, Title } = Typography;

    return (
      <StyledCardWrapper>
        <StyledCardImage>
          <Image
            width={210}
            src={image}
          />
        </StyledCardImage>
        <StyledCardDetails className={!icon && 'align'}>
          <StyledCardTitle>
            { text &&
              <Text>
              12Km * 1 h 30 min
              </Text>
            }
            <Title level={5}>{title}</Title>
            <Text>
              <LocationCurvedIcon />
              Indonesia, Bali
            </Text>
          </StyledCardTitle>
          { icon ? 
            <StyledIconWrapper>
              {icon}
            </StyledIconWrapper>
            :
            <StyledPriceItem>
              <Text>
                $ 20
              </Text>
            </StyledPriceItem>
          }
        </StyledCardDetails>
      </StyledCardWrapper>
    );
}

RecommendedCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string,
}

export default RecommendedCard;