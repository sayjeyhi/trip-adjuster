import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { Row, Col, Typography, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from "@apollo/client";

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import DiscountCard from './partials/DiscountCard';
import { getDiscountsQuery } from '../../queries/index';
import des9 from '../../../assets/images/Destination-9.jpeg';

import { StyledDiscountsWrapper, StyledDiscountsCard, StyledLoadingWrapper } from './style';

const Discounts = () => {

    const { Title } = Typography;
    const [discounts, setDiscounts] = useState([]);
    const [fullyLoaded, setFullyLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const { data, error, fetchMore, variables, loading } = useQuery(getDiscountsQuery, { 
      variables: {
        offset: 0,
        limit: 10
      },
      onCompleted : (data) => {
        setDiscounts( data.discounts);
      }
    });

    const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

    useEffect(() => {
      const loggedIn = localStorage.getItem('loggedIn');
      const loginStatus = JSON.parse(loggedIn);
      if (!loginStatus) {
        navigate('/login');
      } 
    },[]) 

    if (loading) {
      return (
        <StyledLoadingWrapper>
          <Spin indicator={antIcon} />
        </StyledLoadingWrapper>
      )
    }

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15} >
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
                      setPage(page + 1);
                      const result = await fetchMore({
                        variables: {
                          offset: page * 10
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