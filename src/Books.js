export function Book(props) {
  console.log(props);
  const { img, title, author } = props;
  const clickHandler = () => {
    alert(`not bad`);
  };
  const complex = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4
        onClick={() => {
          console.log(title);
        }}
      >
        {author}
      </h4>
      <button onClick={clickHandler}>Traboski</button>
      <button
        onClick={() => {
          return complex(author);
        }}
      >
        Trabaye
      </button>
    </article>
  );
}
