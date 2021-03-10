import { gql, useLazyQuery } from '@apollo/client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import icon from '../assets/search.svg';
import Colors from '../stylings/Colors';
import _ from 'lodash';

const SEARCH = gql`
  query search($query: String!, $limit: Int) {
    corporates: search(
      query: $query
      field: CORPORATE_NAME
      type: Corporate
      limit: $limit
    ) {
      data {
        ... on Corporate {
          id
          name
          slug
          sector {
            name
            id
          }
        }
      }
    }
  }
`;

const Search = () => {
  const [clicked, setClicked] = useState(false);
  const [corporates, setCorporates] = useState([]);

  const [search] = useLazyQuery(SEARCH, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      console.log(data);
      const { corporates } = data;
      setCorporates(corporates.data);
      //   if (clicked) {
      //     corporates.data = [];
      //     users.data = [];
      //   }
      //   if (!!corporates) ;
      //   if (!!users) setUsers(users.data.slice(0));
    },
  });

  // Wrap the callback in a debounce so we dont flood the be
  const [callSearchCallback] = useState(
    () =>
      _.debounce((value) => {
        if (value !== '' && value.length >= 3) {
          search({
            variables: {
              query: value,
              limit: 5,
            },
          });
          setClicked(false);
        } else {
          //   setCorporates([]);
          //   setUsers([]);
        }
      }, 450) // Debounce timer
  );

  // Click in results
  const handleClick = (slug, type) => {
    setClicked(true);
    setCorporates([]);

    // Slug is undef if clicked outside the form
    if (!!slug) {
      console.log('hej');
      // if (type === 'corporate') {
      //   props.history.push('/stock/' + slug + '/quarter');
      // }
      // if (type === 'user') {
      //   props.history.push('/profile/' + slug);
      // }
    }
  };

  return (
    <div style={{ width: '30vw', position: 'relative' }}>
      <SearchForm searchCallback={callSearchCallback} clicked={clicked} />
      <SearchResults corporates={corporates} handleClick={handleClick} />
    </div>
  );
};

const grow = keyframes`
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 85%;
    opacity: 1;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  opacity: 0;
  width: 85%;
  animation: ${grow} 400ms ease-in;
  animation-delay: 300ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  height: 3em;
  border-radius: 1.5em;
  border: 0;
  background-color: ${Colors.gray};
  font-family: Lato;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: ${Colors.black};

  background: url(${icon}) no-repeat scroll 1em 0.8em #f0f0f0;
  padding-left: 3em;

  :focus {
    background: url(${icon}) no-repeat scroll 1em 0.8em #f0f0f0;

    outline: none;
  }
`;

const SearchForm = ({ searchCallback, clicked }) => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (clicked) {
      setSearchString('');
    }
  }, [clicked]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        name='text'
        type='text'
        autoComplete='off'
        value={searchString}
        onChange={(e) => {
          e.preventDefault();
          setSearchString(e.target.value);
          searchCallback(e.target.value);
        }}
      />
    </Form>
  );
};

const TransitionTime = 450;
const EnterTime = 250;

const SearchResultsContainer = styled.div`
  border-radius: 0.5rem;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
  height: ${(props) => (!!props.height ? props.height.toString() + 'em' : 0)};
  background-color: ${Colors.gray};
  transition: ${TransitionTime.toString() + 'ms'};
`;

const searchResultEnter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const SearchResult = styled.div`
  display: flex;
  flex: 100%;
  padding: 0.1em 1em 0 1em;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  cursor: pointer;
  animation-delay: ${(props) => (100 * props.delay).toString() + 'ms'};
  opacity: 0;
  animation-name: ${searchResultEnter};
  animation-duration: ${EnterTime.toString() + 'ms'};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const SearchResultTitle = styled.div`
  font-family: Lato;
  font-size: 0.75rem;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  text-align: left;
  opacity: 0.6;
`;

const NameSpan = styled.div`
  font-family: Poppins;
  font-size: 0.75rem;
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  text-align: left;
`;

const SectorSpan = styled.div`
  font-family: Lato;
  font-size: 0.75rem;
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: right;
  opacity: 0.6;
  font-stretch: normal;
`;

const SearchResults = ({ corporates, handleClick }) => {
  const [height, setHeight] = useState(0);
  const searchResultRef = useRef(null);
  const [results, setResults] = useState([]);

  const handleClickOutside = useCallback(
    (event) => {
      let childClicked = false;
      if (
        searchResultRef &&
        searchResultRef.current &&
        searchResultRef.current.children.length > 0
      ) {
        childClicked = !![...searchResultRef.current.children].find(
          (c) =>
            c === event.target ||
            [...c.children].find((f) => f === event.target)
        );
      }

      if (
        searchResultRef.current &&
        searchResultRef.current !== event.target &&
        !childClicked
      ) {
        handleClick(undefined);
      }
    },
    [handleClick]
  );

  // Add listner when there is a search result. Otherwise remove it
  useEffect(() => {
    if (corporates && corporates.length > 0) {
      const margin = 1;
      let _height = 1; // add devider
      _height = !!corporates.length ? _height + 1 : _height;
      _height = (corporates.length + _height) * margin;
      setHeight(_height);

      document.addEventListener('mousedown', handleClickOutside);
    } else {
      setHeight(0);
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [corporates, handleClickOutside]);

  useEffect(() => {
    let _result = [];
    let _delay = 0;
    if (corporates.length > 0) {
      _delay++;
      _result.push(
        <SearchResult key={1} delay={_delay}>
          <SearchResultTitle>Bolag:</SearchResultTitle>
        </SearchResult>
      );

      _result.push(
        corporates.map((d) => {
          _delay++;
          return (
            <SearchResult
              delay={_delay}
              as='a'
              onClick={(e) => {
                setHeight(0);
                handleClick(d.slug, 'corporate');
              }}
              key={d.slug}
            >
              <NameSpan>{d.name}</NameSpan>
              <SectorSpan>{d.sector.name}</SectorSpan>
            </SearchResult>
          );
        })
      );
    }

    setResults(_result);
  }, [corporates, handleClick]);

  return results.length > 0 ? (
    <SearchResultsContainer height={height} ref={searchResultRef}>
      {height > 0 ? results : null}
    </SearchResultsContainer>
  ) : null;
};

export default Search;
