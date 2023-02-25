import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
function Booklist() {
  return (
    <section className='booklist'>
      {/* this is where the function is being called although it is later declared in another place */}
      <Book />
      <Book />
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
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg'
      alt=''
    />
  );
};
const Title = () => {
  return <h2> I love you to the moon and back</h2>;
};
const Author = () => {
  // setting up inline style for jsx element is in the form of using javascript object which have a key-value pairs
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.74rem', marginTop: '0.25rem' }}>
      Amelia Hepworth
    </h4>
  );
};
ReactDom.render(<Booklist />, document.getElementById('root'));
