const Card = ({cards,title,handleDelete}) => {
  return (
    <div className="cards">
      <h2>{title}</h2>
      <div className="card-list">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div className="card-head">
                <h3 className="card-title">{card.title}</h3>
                <h4 className="card-author"> {card.author}</h4>
              </div>
              <div className="card-body">
                <p className="card-passage">{card.body}</p>
                <button onClick={()=>{handleDelete(card.author)}}>Delete Blog</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
