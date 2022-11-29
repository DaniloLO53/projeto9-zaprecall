import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Question({ data, index }) {
  console.log(data);
  const closedQuestion = (
    <>
      <p>
        Pergunta
        {' '}
        {index + 1}
      </p>
      <img alt="play_arrow" src="./img/seta_play.png" />
    </>
  );

  return (
    <StyledQuestionContainer>
      {closedQuestion}
    </StyledQuestionContainer>
  );
}

const StyledQuestionContainer = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

Question.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Question;
