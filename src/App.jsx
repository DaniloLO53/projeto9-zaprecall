import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import cards from './utils/cards';

import './assets/css/reset.css';

function App() {
  console.log(cards);

  return (
    <StyledGreatContainer>
      jpk
    </StyledGreatContainer>
  );
}

const StyledGreatContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

// App.PropTypes = {

// };

export default App;
