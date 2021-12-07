import React, {useState, useEffect} from "react";
import './App.scss';
import beers from "./Data/data";
import CardListJSX from "./Components/CardList/CardList";


const App = () => {
    const [beerArr, setBeerArr] = useState([])

    useEffect(() => {
        const URL = ``
        fetch(URL)
            .then(response => {
            return response.json();
        }).then((beerArr) => {
            setBeerArr(beerArr);
            console.log(beerArr);
        });
    }, []);

    const highAbvBeer = beers
    .filter(beer => beer.abv > 6)
    .sort((a, b) => b.abv - a.abv);

    const classicBeer = beers
    .filter(beer => beer.first_brewed < 1)
    .sort((a, b) => b.abv - a.abv);

    console.log(highAbvBeer);




    return <>{CardListJSX()}</>;
}

console.log(CardListJSX());

export default App;
