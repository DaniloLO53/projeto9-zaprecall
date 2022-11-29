import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import cards from './utils/cards';

function App() {
  console.log(cards);

  return (
    <StyledGreatContainer>
      jpk
    </StyledGreatContainer>
  );
}

const StyledGreatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fb6b6b;
  font-family: 'Recursive', sans-serif;
`;

// App.PropTypes = {

// };

export default App;
