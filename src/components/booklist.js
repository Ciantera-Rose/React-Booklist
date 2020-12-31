import React from "react";

// stateless functional component
// always return JSX

// JSX RULES:
// return single element
// div / section / article  or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

//setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/71yA4+MC46L._AC_UY218_.jpg",
  title: "Deep Work: Rules For Focused Success in a Distracted World",
  author: "Cal Newport",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/81FGAD1jP0L._AC_UY218_.jpg",
  title: "Digital Minimalism: Choosing a Focused Life in a Noisy World",
  author: "Cal Newport",
};
export default function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
