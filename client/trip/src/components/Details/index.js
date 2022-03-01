import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../Header';
import RecommendedCard from './../RecommendedCard';

import des3 from '../../assets/images/Destination-3.jpeg';

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
        } from './style';

const Details = () => {

    const [showMore, setShowMore] = useState(false);
    const { Text, Title } = Typography;

    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    }

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
                <StyledHeaderWrapper>
                    <Header type="details" title="Detail" icon={<MoreHorizontalFillIcon />}  />
                </StyledHeaderWrapper>
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
                    <a onClick={handleShowMore} className="more">{!showMore && 'Read More...'} </a>
                    {showMore &&
                        <span>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                    }
                </Text>
            </StyledContentWrapper>
            <RecommendedCard image={des3} title="20.8 km" icon={<GpsFIcon size={2} />} />
            <StyledFooterWrapper>
                <StyledFooterPriceItem>
                    <Text>
                        Total Price
                    </Text>
                    <Title level={5}>
                        <Text>$</Text>
                         40.00 
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
}

export default Details;