import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Image, Typography, Button } from 'antd';

import { useQuery } from "@apollo/client";
import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../../Common/Header';
import RecommendedCard from '../Recommended/partials/RecommendedCard';
import { getDestinationQuery } from '../../queries';

import des1 from '../../../assets/images/Destination-1.jpeg';
import des2 from '../../../assets/images/Destination-2.jpeg';
import des3 from '../../../assets/images/Destination-3.jpeg';
import des4 from '../../../assets/images/Destination-4.jpeg';
import des5 from '../../../assets/images/Destination-5.jpeg';
import des6 from '../../../assets/images/Destination-6.jpeg';
import des7 from '../../../assets/images/Destination-7.jpeg';
import des8 from '../../../assets/images/Destination-8.jpeg';
import des9 from '../../../assets/images/Destination-9.jpeg';
import loc from '../../../assets/images/location.jpeg';

import { StarCurvedIcon, LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledDetailsWrapper, 
            StyledCardImage, 
            StyledCardWrapper,
            StyledCardDetails, 
            StyledCardTitle,
            StyledPriceItem,  
            StyledContentWrapper,
            StyledHeaderWrapper,
            StyledFooterWrapper,
            StyledFooterPriceItem,
            StyledButton,
            StyledLoadingWrapper,
        } from './style';

const Details = () => {

    const location = useLocation();
    const destinationId = location.search;
    const id = destinationId.split('=')[1];

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

    const { loading, error, data } = useQuery(getDestinationQuery, {
        variables: { id }
    });

    const [showMore, setShowMore] = useState(false);
    const { Text, Title } = Typography;

    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    }

    if (!loading) {
        const { name, city, country, description, destination, id, price, star } = data.destination;
        return (
            <>
              <Row className="ant-row ant-row-center">
                <Col span={10}>
                  <StyledDetailsWrapper>
                    <StyledCardImage>
                        <Image
                            width="100%"
                            src={images[`img${id}`]}
                        />
                        <StyledHeaderWrapper>
                            <Header type="details" title="Detail" icon={<MoreHorizontalFillIcon />}  />
                        </StyledHeaderWrapper>
                    </StyledCardImage>
                    <StyledCardWrapper>
                        <StyledCardDetails>
                            <StyledCardTitle>
                                <Title level={5}>{name}</Title>
                                <Text>
                                    <LocationCurvedIcon />
                                    {country}, {city}
                                </Text>
                            </StyledCardTitle>
                            <StyledPriceItem>
                                <Text>
                                    Overview
                                </Text>
                                <Text>
                                    <StarCurvedIcon /> {star}
                                </Text>
                            </StyledPriceItem>
                        </StyledCardDetails>
                    </StyledCardWrapper>
                    <StyledContentWrapper>
                        <Title level={5}>Description</Title>
                        <Text className={`${showMore ? "full-text" : ""}`}>
                            {description}
                        </Text>
                        <a onClick={handleShowMore} className="more">{!showMore && 'Read More...'} </a>
                    </StyledContentWrapper>
                    
                    <RecommendedCard image={loc} title={`${destination} km`} icon={<GpsFIcon size={2} />} />
                    <StyledFooterWrapper>
                        <StyledFooterPriceItem>
                            <Text>
                                Total Price
                            </Text>
                            <Title level={5}>
                                <Text>$</Text>
                                 {price} 
                                <Text>Per day</Text>
                            </Title>
                        </StyledFooterPriceItem>
                        <StyledButton>
                            <Button type="primary" shape="round" >Book Now</Button>
                        </StyledButton>
                    </StyledFooterWrapper>
                  </StyledDetailsWrapper>
                </Col>
              </Row>
            </>
        );
    } else {
        return (
          <StyledLoadingWrapper>
            loading ...
          </StyledLoadingWrapper>
        )
      }
}

export default Details;