import React from 'react';
import { Row, Col, Image, Typography } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';

import RecommendedCard from './../RecommendedCard';
import Footer from "./../Footer";

import des3 from '../../assets/images/Destination-3.jpeg';

import { StarCurvedIcon, LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledDetailsWrapper, 
            StyledCardImage, 
            StyledCardWrapper,
            StyledCardDetails, 
            StyledCardTitle,
            StyledPriceItem,  
            StyledContentWrapper,
        } from './style';

const Details = () => {

    const { Text, Title } = Typography;

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledDetailsWrapper>
            <StyledCardImage>
                <Image
                    width="100%"
                    src={des3}
                />
            </StyledCardImage>
            <StyledCardWrapper>
                <StyledCardDetails>
                    <StyledCardTitle>
                        <Title level={5}>Camp Bukit Raya</Title>
                        <Text>
                            <LocationCurvedIcon />
                            Indonesia, Bali
                        </Text>
                    </StyledCardTitle>
                    <StyledPriceItem>
                        <Text>
                            Overview
                        </Text>
                        <Text>
                            <StarCurvedIcon /> 4.8
                        </Text>
                    </StyledPriceItem>
                </StyledCardDetails>
            </StyledCardWrapper>
            <StyledContentWrapper>
                <Title level={5}>Description</Title>
                <Text>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </Text>
            </StyledContentWrapper>
            <RecommendedCard image={des3} title="20.8 km" icon={<GpsFIcon size={2} />} />
            <Footer />
          </StyledDetailsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Details;