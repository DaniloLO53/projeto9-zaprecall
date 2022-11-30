import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer({ answereds, cardsLength }) {
  const icons = answereds.map((state) => <StyledIcons alt="icon" src={`./img/${state}.png`} />);

  const message = () => {
    const WIN = ['party', 'Parabéns!', 'Você não esqueceu de nenhum flashcard!'];
    const LOOSE = ['sad', 'Putz...', 'Ainda faltam alguns... Mas não desanime!'];

    return answereds.includes('icone_erro') ? LOOSE : WIN;
  };

  return (
    <StyledFooterContainer>
      <div>
        <img src={`./img/${message()[0]}.png`} alt="icon" data-test="finish-text" />
        <p data-test="finish-text">{message()[1]}</p>
      </div>
      <div data-test="finish-text">
        {message()[2]}
      </div>
      <div>
        {`${answereds.length}/${cardsLength} CONCLUÍDOS  `}
      </div>
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

  div {
    /* background-color: pink; */
    margin: 15px;
  }

  div:first-of-type {
    display: flex;
    font-weight: 700;
  }

  div:first-of-type * {
    margin: 3px;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    text-align: center;
  }
`;

const StyledIcons = styled.img`
  margin: 3px;
`;

Footer.propTypes = {
  answereds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  cardsLength: PropTypes.number.isRequired,
};

export default Footer;
