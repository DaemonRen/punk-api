import "./Card.scss"

const Card = (props) => {
    const {beer} = props;

  return (
    <div className="card">
      <div className="card-info">
          <img className="card-info__img" src={beer.image_url} alt="Alcoholic beverage" />
        <div className="card-info__stats">
            <p className="card-info__stats-name">{beer.name}</p>
            <p className="card-info__stats-abv">{beer.abv}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;