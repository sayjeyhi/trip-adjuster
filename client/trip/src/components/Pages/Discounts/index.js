import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import { Row, Col, Typography } from 'antd';

import { useQuery } from "@apollo/client";

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import DiscountCard from './partials/DiscountCard';

import { getDiscountsQuery } from '../../queries/index';

import des9 from '../../../assets/images/Destination-9.jpeg';

import { StyledDiscountsWrapper, StyledDiscountsCard } from './style';

const Discounts = () => {

    const { Title } = Typography;
    const [discounts, setDiscounts] = useState([]);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const { data, error, fetchMore, variables, loading } = useQuery(getDiscountsQuery, { 
      variables: {
        offset: 0,
        limit: 10
      }});

    useEffect(() => {
      if (!loading) {
        setDiscounts(data.discounts);
      }
  
    },[loading]);

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledDiscountsWrapper>
            <Header type="Discounts" title="Discounts" />
              <StyledDiscountsCard>
              {discounts ? discounts.map((item,index) => (
                  <DiscountCard image={des9} title={item.locationTitle} text={item.validUntil} discount={item.code} percent={item.discount} />
                ))
                :
                <Title level={5} >There is'nt any discount now</Title>
              }
            </StyledDiscountsCard>
            {discounts.length % variables.limit === 0 &&
              !fullyLoaded && (
                <InView
                  onChange={async (inView) => {
                    if (inView) {
                      const result = await fetchMore({
                        variables: {
                          offset: discounts.length
                        }
                      });
                      setFullyLoaded(!result.discounts.length);
                    }
                  }}
                />
              )}
            <Footer />
          </StyledDiscountsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Discounts;