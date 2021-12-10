import "./Card.scss"

const Card = (props) => {
    const {beerName, beerImage, beerAbv} = props;

  return (
    <div className="card">
      <div className="card-info">
          <img className="card-info__img" src={beerImage} alt={beerName} />
        <div className="card-info__stats">
            <p className="card-info__stats-name">Name: {beerName}</p>
            <p className="card-info__stats-abv">ABV: {beerAbv}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;