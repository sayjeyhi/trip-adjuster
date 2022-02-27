import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Input } from 'antd';
import { BellOIcon } from '@iconbox/fa4';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledSearchWrapper, StyledIconWrapper } from './style';

const Search = () => {
    const { Title } = Typography;
    return (
      <StyledSearchWrapper>
        <Input placeholder="Search for places..." className="search" />
        <StyledIconWrapper>
            <SearchLightIcon color="white" />
        </StyledIconWrapper>
      </StyledSearchWrapper>
    );
}
Search.propTypes = {
}

export default Search;