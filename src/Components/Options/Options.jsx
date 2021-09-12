import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Hyundai Spare Parts",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Bosch Spare Parts", handler: () => {}, id: 2 },
    { text: "Suzuki Spare Parts", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;