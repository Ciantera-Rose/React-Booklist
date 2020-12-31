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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
  <article className='book'>
    <Image />
    <Title /> 
    <Author /> 
  </article>
 )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51fPR50mdlL._AC_SX184_.jpg"
    alt=""
  />
)

const Title = () => <h1>Humans</h1>

const Author = () => <h4>Brandon Stanton</h4>

