import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';

function Questions({ cards }) {
  return (
    <StyledQuestionsContainer>
      {cards.map((data, index) => (
        <Question
          key={data.question}
          data={data}
          index={index}
        />
      ))}
    </StyledQuestionsContainer>
  );
}

const StyledQuestionsContainer = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 30px;
`;

Questions.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
};

export default Questions;
