import React, { useState } from 'react';

const QueCard = (props) => {
  const { data, id, setScore, score } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const answerArray = props.answerArray;
  const setAnswerArray = props.setAnswerArray;

  const handleOptionChange = (selectedIdx) => {
    setSelectedOption(selectedIdx);
    let temp = answerArray;
    temp[id] = selectedIdx;
    setAnswerArray(temp);
  };

  return (
    <div className={`w-[70%] h-auto ${id === 4 ? 'invisible' : ''}`}>
      <div className='text-white mb-2'>{`${id + 1} - ${data.question}`}</div>
      <div className='flex flex-col'>
        {data.options.map((op, index) => (
          <div className='text-white space-x-3' key={index}>
            <input
              type="radio"
              id={`q${id}-option-${index + 1}`}
              name={`question${id}`}
              checked={selectedOption === index}
              value={op}
              onChange={() => handleOptionChange(index)}
            />
            <label htmlFor={`q${id}-option-${index + 1}`}>{op}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueCard;
