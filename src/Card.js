const Card = ({ cards, title, handleDelete, handleRefresh }) => {
  return (
    <div className="cards">
      <h2>{title}</h2>
      {handleRefresh && <button onClick={handleRefresh}>refresh</button>}
      <br />
      <br />
      <div className="card-list">
        {cards && cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div className="card-head">
                <h3 className="card-title">{card.title}</h3>
                <h4 className="card-author"> {card.author}</h4>
              </div>
              <div className="card-body">
                <p className="card-passage">{card.snippet}</p>
                {handleDelete && <button
                  onClick={() => {
                    handleDelete(card.id);
                  }}
                >
                  Delete Blog
                </button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
