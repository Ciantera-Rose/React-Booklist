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

export default function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'Humans'
  const author = "Brandon Stanton";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51fPR50mdlL._AC_SX184_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{}</p> */}
    </article>
  );
};
