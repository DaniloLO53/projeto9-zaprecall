import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function QuestionExpanded({ data }) {
  const { answer, question } = data;
  console.log(answer);

  return (
    <StyledQuestionExpandedContainer>
      <p>{question}</p>
      <div>
        <img alt="show_answer" src="/img/seta_virar.png" />
      </div>
    </StyledQuestionExpandedContainer>
  );
}

const StyledQuestionExpandedContainer = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    text-align: end;
    font-size: 20px;
  }

  img {
    width: 25px;
  }
`;

QuestionExpanded.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestionExpanded;
