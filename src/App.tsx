import { useState } from 'react'
import './App.css'

function AccordionItem({ props, onToggle}: { props: { title: string, toggle: boolean, content: string, color: string, color2: string }, onToggle: () => void }): JSX.Element {
  // color cannot construct dynamically because of how tailwindcss works
  return (
    <div className="flex mb-4">
      <div className={`w-2 ${props.color}`}></div>
      <div className={`flex flex-col w-full ${props.color2}`}>
        <button className="flex" onClick={e => onToggle()}>
          <div className="flex-grow text-start pl-2 my-3">{props.title}</div>
          <div className="w-12 self-center">{ props.toggle ? "x" : "+"}</div>
        </button>
        { props.toggle && <div className="p-2 pr-12">{props.content}</div> }
      </div>
    </div>
  )
}

function Accordion() {
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "What is React and why should I learn it?",
      content:
        "React is a popular JavaScript library used for building user interfaces. It allows you to create reusable UI components that can be combined to create complex interfaces. Learning React can help you build modern, scalable web applications and improve your job prospects as a developer.",
      toggle: false,
      color: "bg-orange-500",
      color2: "bg-orange-200",
    },
    {
      title: "Do I need to know JavaScript before learning React?",
      content:
        "Yes, you should have a good understanding of JavaScript before learning React. React is a JavaScript library, so you need to know the basics of JavaScript such as variables, functions, arrays, and objects. You should also be familiar with concepts like scope, closures, and callbacks.",
      toggle: false,
      color: "bg-blue-500",
      color2: "bg-blue-200",
    },
    {
      title: "What tools do I need to learn React?",
      content:
        "To get started with React, you need a code editor such as Visual Studio Code or Atom, and a web browser like Chrome or Firefox. You can also use Node.js and npm to set up a development environment and install packages.",
      toggle: false,
      color: "bg-violet-500",
      color2: "bg-violet-200",
    },
    {
      title: "How do I create a React component?",
      content:
        "To create a React component, you can use the `React.createClass` method or create a class that extends the `React.Component` class. You can define the component's `render` method to return the HTML markup, and use props to pass data to the component.",
      toggle: false,
      color: "bg-purple-500",
      color2: "bg-purple-200",
    },
    {
      title: "What is JSX and how does it work with React?",
      content:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's used to create React elements and components, and makes it easier to work with the virtual DOM. JSX is not required to use React, but it's a helpful tool that can make your code more readable and maintainable.",
      toggle: false,
      color: "bg-green-500",
      color2: "bg-green-200",
    },
  ]);

  const toggleContent = (index: number) => {
    setAccordionItems((prev) => {
      const newAccordionItems = [...prev];
      newAccordionItems[index] = { ...newAccordionItems[index], toggle: !newAccordionItems[index].toggle };
      return newAccordionItems;
    });
  }

  return (
    <div>
      {accordionItems.map((props, index) => (
        <AccordionItem key={index} props={props} onToggle={() => toggleContent(index)} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="flex">
      <div className="mx-auto w-3/4">
        <div className="my-4 text-center">
          <h3 className="my-1 font-bold text-3xl">Frequently Asked Questions</h3>
          <p className="text-sm mx-auto max-w-xs">Answers to common questions about our frontend challenge website.</p>
        </div>
        <Accordion />
      </div>
    </div>
  )
}

export default App
