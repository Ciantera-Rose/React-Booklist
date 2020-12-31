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
const books = [
  { id: 1,
    img: "https://m.media-amazon.com/images/I/71yA4+MC46L._AC_UY218_.jpg",
    title: "Deep Work: Rules For Focused Success in a Distracted World",
    author: "Cal Newport",
  },

  { id: 2,
    img: "https://m.media-amazon.com/images/I/81FGAD1jP0L._AC_UY218_.jpg",
    title: "Digital Minimalism: Choosing a Focused Life in a Noisy World",
    author: "Cal Newport",
  },

  { id: 3,
    img: "https://m.media-amazon.com/images/I/91-C86tJc2L._AC_UY218_.jpg",
    title: "Algorithms Illuminated: Part 1: The Basics",
    author: "Tim Roughgarden",
  },
];

export default function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
         <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
