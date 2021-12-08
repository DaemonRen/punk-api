import React from "react";
import Card from "../Card/Card";


const CardList = (props) => {
    const { beerArr } = props;

    // const frontBeerArr= beerArr.map(beer => album.strAlbumThumb);

    const CardListJSX = beerArr.map(beer => (
          <Card key={beer.id} beerImage={beer.image_url}  beerName={beer.name}  beerAbv={beer.abv} />
      ))

      return <>{CardListJSX}</>
}

export default CardList