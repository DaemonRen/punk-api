import beers from "../../Data/data";
import Card from "../Card/Card";


const CardList = () => {

    const CardListJSX = beers.map(beer => (
          <Card beerImage={beer.image_url}  beerName={beer.name}  beerAbv={beer.abv} />
      ))

      return <>{CardListJSX}</>
}

export default CardList