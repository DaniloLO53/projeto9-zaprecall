import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer({ answereds, cardsLength }) {
  const icons = answereds.map((state) => <img alt="icon" src={`./img/${state}.png`} />);

  return (
    <StyledFooterContainer>
      {`${answereds.length}/${cardsLength} CONCLUÍDOS  `}
      <div>
        {icons}
      </div>
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
  font-weight: 500;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  & div:first-of-type img {
    margin: 5px;
  }
`;

Footer.propTypes = {
  answereds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cardsLength: PropTypes.number.isRequired,
};

export default Footer;
