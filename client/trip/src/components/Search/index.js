import React from 'react';
import { Button, Input } from 'antd';
import { SearchLightIcon } from '@iconbox/iconly';

import { StyledSearchWrapper, StyledIconWrapper } from './style';

const Search = () => {
    return (
      <StyledSearchWrapper>
        <Input placeholder="Search for places..." className="search" />
        <StyledIconWrapper>
          <Button type="primary" shape="circle" icon={<SearchLightIcon />} />
        </StyledIconWrapper>
      </StyledSearchWrapper>
    );
}
Search.propTypes = {
}

export default Search;