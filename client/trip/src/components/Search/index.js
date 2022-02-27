import React from 'react';
import { Typography, Input } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledSearchWrapper, StyledIconWrapper } from './style';

const Search = () => {
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