import React from "react"




const Book = (props) => {
  // attribute, eventHandler
  //onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello Cian");
  };

  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        button
      </button>
      {/* <button type="button" onClick={}>Example</button> */}
    </article>
  );
};

export default Book 