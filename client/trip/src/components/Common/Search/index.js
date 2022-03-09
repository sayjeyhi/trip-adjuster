import React, { useContext, useState } from 'react';
import { Button, Input, Form } from 'antd';

import { SearchLightIcon } from '@iconbox/iconly';

import { context } from '../../context/destinationContext';

import { StyledSearchWrapper, StyledIconWrapper } from './style';

const Search = () => {

  const [search, setSearch] = useState("");
  const { setDestinations, destCards } = useContext(context);

  const handleSetSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSearchDestination = () => {
    if (search) {
      const filteredDestinations = destCards.filter(item => item.name.toLowerCase() === search || item.city.toLowerCase() === search);
      setDestinations(filteredDestinations);
    } else {
      setDestinations(destCards);
    }
  }

    return (
      <StyledSearchWrapper>
        <Form onFinish={handleSearchDestination}>
          <Input value={search} onChange={handleSetSearch} placeholder="Search for places..." className="search" />
          <StyledIconWrapper>
            <Button type="primary" onClick={handleSearchDestination} shape="circle" icon={<SearchLightIcon />} />
          </StyledIconWrapper>
        </Form>
      </StyledSearchWrapper>
    );
}
Search.propTypes = {
}

export default Search;