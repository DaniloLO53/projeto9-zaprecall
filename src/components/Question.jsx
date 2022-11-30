import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionExpanded from './QuestionExpanded';

function Question({ data, index }) {
  const [expand, setExpand] = useState(false);
  const [questionState, setQuestionState] = useState('seta_play');

  console.log(data);
  const closedQuestion = (
    <StyledQuestionContainer
      questionState={questionState}
    >
      <button
        type="button"
        onClick={() => setExpand(true)}
      >
        <p>
          Pergunta
          {' '}
          {index + 1}
        </p>
        <img
          alt="play_arrow"
          src={`./img/${questionState}.png`}
        />
      </button>
    </StyledQuestionContainer>

  );

  return expand ? (
    <QuestionExpanded
      data={data}
      setQuestionState={setQuestionState}
      setExpand={setExpand}
    />
  ) : closedQuestion;
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
    text-decoration: ${({ questionState }) => (questionState === 'seta_play' ? 'none' : 'line-through')};
    color: ${({ questionState }) => {
    switch (questionState) {
      case 'icone_erro':
        return 'red';
      case 'icone_quase':
        return '#ff922e';
      case 'icone_certo':
        return '#2fbe34';
      default:
        return 'black';
    }
  }};
  }

  button:first-of-type {
    all: inherit;
    box-shadow: none;
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
