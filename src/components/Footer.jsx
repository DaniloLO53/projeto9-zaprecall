import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer({ answereds, cardsLength }) {
  return (
    <StyledFooterContainer>
      {`${answereds} / ${cardsLength} CONCLUÍDOS  `}
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

Footer.propTypes = {
  answereds: PropTypes.number.isRequired,
  cardsLength: PropTypes.number.isRequired,
};

export default Footer;
