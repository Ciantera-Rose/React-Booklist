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

import { books } from "./books";
import Book from "./Book"

export default function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
