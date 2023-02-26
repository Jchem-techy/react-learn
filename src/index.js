import { getByTitle } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import { books } from './book';
import { Book } from './Books';
import './index.css';

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        const { img, author, title } = book;

        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'));
