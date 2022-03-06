import React from 'react';
import PropTypes from 'prop-types';
import { Image, Typography } from 'antd';
import { DiscountBrokenIcon } from '@iconbox/iconly'; 

import { StyledCardWrapper, 
         StyledCardImage, 
         StyledCardDetails, 
         StyledCardTitle,
         StyledPriceItem, 
         StyledIconWrapper,
       } from './style';

const DiscountCard = ({image, title, discount, text, percent}) => {

    const { Text, Title } = Typography;

    return (
      <StyledCardWrapper className="discount-card">
        <StyledCardImage>
          <Image preview={false} src={image} />
        </StyledCardImage>
        <StyledCardDetails className={!discount && 'align'}>
          <StyledCardTitle>
            <Text className="discount-code">
              {<DiscountBrokenIcon />}
              {discount}
            </Text> 
            <Title level={5}>{title}</Title>
            { text &&
              <Text>
              Valid until: {text}
              </Text>
            }
          </StyledCardTitle>
          { percent &&
            <StyledPriceItem>
            <Text>
              %{percent}
            </Text>
          </StyledPriceItem>
            
          }
        </StyledCardDetails>
      </StyledCardWrapper>
    );
}

DiscountCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  discount: PropTypes.string,
  percent: PropTypes.number,
  text: PropTypes.node,
}

export default DiscountCard;