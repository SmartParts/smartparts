import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Options/Options";
import Quiz from "../Quiz/Quiz";
import '../Options/Options.css';

const config = {
  
  botName: "Smart Parts",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8517FF",
    },
    chatButton: {
      backgroundColor: "#8517FF",
    },
  
  },
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to buy`, {
      widget: "options",
      
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "About Smart Parts Export",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is this site about?",
            answer:
              "Smart Parts is leading exporter of automobile spare parts.",
            id: 1,
          },
          {
            question: "In which brands company is dealing with",
            answer:
              "Company deals with famous brands like Mahindra, Hyundai, Suzuki, TATA, Nissan etc.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;