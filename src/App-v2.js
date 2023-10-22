import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <>
      <Acordion>{faqs}</Acordion>
    </>
  );
}

const Acordion = (props) => {
  const [isOpen, setIsOpen] = useState(-1);

  function handleIsOpen(i) {
    setIsOpen((io) => (io === i ? -1 : i));
  }

  return (
    <div className="accordion">
      {props.children.map((item, i) => (
        <Item
          title={item.title}
          index={i}
          isOpen={isOpen}
          onIsOpen={handleIsOpen}
          key={i}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
};

function Item(props) {
  return (
    <>
      <div
        className={`item ${props.isOpen === props.index ? "open" : null}`}
        onClick={() => {
          props.onIsOpen(props.index);
        }}
      >
        <p className="number"> {props.index + 1}</p>
        <p className="title">{props.title}</p>
        <p className={`icon ${props.isOpen === props.index ? "open" : null}`}>
          {" "}
          {props.isOpen !== props.index ? "+" : "-"}
        </p>

        {props.isOpen === props.index && (
          <p className="content-box">{props.children}</p>
        )}
      </div>
    </>
  );
}

