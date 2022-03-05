import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { Image, Typography } from 'antd';
import { LocationCurvedIcon, StarCurvedIcon } from '@iconbox/iconly'; 

import des1 from '../../../../../assets/images/Destination-1.jpeg';
import des2 from '../../../../../assets/images/Destination-2.jpeg';
import des3 from '../../../../../assets/images/Destination-3.jpeg';
import des4 from '../../../../../assets/images/Destination-4.jpeg';
import des5 from '../../../../../assets/images/Destination-5.jpeg';
import des6 from '../../../../../assets/images/Destination-6.jpeg';
import des7 from '../../../../../assets/images/Destination-7.jpeg';
import des8 from '../../../../../assets/images/Destination-8.jpeg';
import des9 from '../../../../../assets/images/Destination-9.jpeg';

import { StyledCardWrapper, 
         StyledCardImage, 
         StyledCardDetails, 
         StyledCardTitle, 
         StyledRateItem,
         StyledPriceItem, 
       } from './style';

const DestinationCard = (item) => {

    const { Text, Title } = Typography;
    const { name, id, price, star, city, country } = item.item;

    const images = {
      img1: des3,
      img2: des2, 
      img3: des1, 
      img4: des4, 
      img5: des5, 
      img6: des6, 
      img7: des7, 
      img8: des8, 
      img9: des9, 
    } 

    return (
      <StyledCardWrapper className="destination-card" id={id}>
        <StyledCardImage>
          <NavLink to={`details/?id=${id}`} >
            <Image preview={false}
              src={images[`img${id}`]}
            />
          </NavLink>
          <StyledPriceItem>
            <Text>
              $ {price}
            </Text>
          </StyledPriceItem>
        </StyledCardImage>
        <StyledCardDetails>
          <StyledCardTitle>
            <NavLink to={`details/?id=${id}`} >
              <Title level={5}>{name}</Title>
            </NavLink>
            <Text>
              <LocationCurvedIcon />
              {country}, {city}
            </Text>
          </StyledCardTitle>
          <StyledRateItem>
            <Text>
              <StarCurvedIcon />
              {star}
            </Text>
          </StyledRateItem>
        </StyledCardDetails>
      </StyledCardWrapper>
    );
}

DestinationCard.propTypes = {
  item: PropTypes.object,
}

export default DestinationCard;