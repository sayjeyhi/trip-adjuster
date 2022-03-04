import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Row, Col, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { useMutation } from "@apollo/client";
import { getLoginMutation } from '../../queries/index';

import { StyledLoginWrapper, StyledFormWrapper, StyledErrorWrapper } from './style';

const Login = () => {

    const { Title, Text } = Typography;
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({});
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [ login ] = useMutation(getLoginMutation);

    const handleLogin = () => {
      login({ 
        variables: { 
            username: name, 
            password: password,  
        },
        onCompleted: (data) => {
          setLoginData(data.login);
       }
      });
    }

    useEffect(() => {
      if (loginData) {
        const { loggedIn, token, name } = loginData;
        localStorage.setItem('token', token);
        localStorage.setItem('username', name);
        if (loggedIn) {
          navigate('/');
        } else {
          setError("user not found!")
        }
      }
    },[loginData])

    const handleSetName = (e) => {
      setName(e.target.value);
    }

    const handleSetPassword = (e) => {
      setPassword(e.target.value);
    }


    return (
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledLoginWrapper>
            <Title level={3}>Login</Title>
            <StyledFormWrapper>
              <Input placeholder="username" value={name} onChange={handleSetName}  />
              <Input.Password placeholder="password" value={password} onChange={handleSetPassword}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              <Button type="primary" shape="round" onClick={handleLogin} >Login</Button>
              <StyledErrorWrapper>
                <Text>{error}</Text>
              </StyledErrorWrapper>
            </StyledFormWrapper>
          </StyledLoginWrapper>
        </Col>
      </Row>
    );
}

Login.propTypes = {
}

export default Login;