import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];


export default function App(){
  console.log("message")
  return (
    <>
    <div className="accordion">
      {faqs.map((item , i) =><Item title={item.title} index={i} key="key" >{item.text}</Item> )}
    </div>
    
    </>
  )
}



function Item (props){
  const [isOpen,setIsOpen] = useState(false)
  return<>
    <div className={`item ${isOpen && "open" }`} onClick={()=> {setIsOpen(!isOpen)}}>
      <p className="number"> {props.index}</p>
      <p className="title">{props.title}</p>
      <p className={`icon ${isOpen && "open" }`}> {!isOpen ? "+" : "-" }</p>
      
      {isOpen&& (<p className="content-box">{props.children}</p>)}
    </div>
  </>


}




