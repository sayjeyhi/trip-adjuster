import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Row, Col, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { useMutation } from "@apollo/client";
import { getLoginMutation } from '../../queries/index';

import { StyledLoginWrapper, StyledFormWrapper } from './style';

const Login = () => {

    const { Title } = Typography;
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({});
    const [ login ] = useMutation(getLoginMutation);

    const handleLogin = () => {
      login({ 
        variables: { 
            username: "mesbah68", 
            password: "admin",  
        },
        onCompleted: (data) => {
          setLoginData(data.login);
       }
      });
    }

    useEffect(() => {
      if (loginData) {
        console.log(loginData);
        const { loggedIn, token } = loginData;
        console.log(token);
        localStorage.setItem('token', token);
        if (loggedIn) {
          navigate('/');
        }
      }
    },[loginData])


    return (
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledLoginWrapper>
            <Title level={3}>Login</Title>
            <StyledFormWrapper>
              <Input placeholder="username" />
              <Input.Password placeholder="password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              <Button type="primary" shape="round" onClick={handleLogin} >Login</Button>
            </StyledFormWrapper>
          </StyledLoginWrapper>
        </Col>
      </Row>
    );
}

Login.propTypes = {
}

export default Login;