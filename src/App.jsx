import React, {useState, useEffect} from "react";
import './App.scss';
import CardList from "./Components/CardList/CardList";
import Nav from "./Containers/Navbar/Navbar";


const App = () => {
    const [beerArr, setBeerArr] = useState([]);

    useEffect(() => {
        const URL = `https://api.punkapi.com/v2/beers/`
        fetch(URL)
            .then(response => {
            return response.json();
        }).then((beerList) => {
            setBeerArr(beerList);
            console.log(beerList);
        });
    }, [URL]);

    // const highAbvBeer = beers
    // .filter(beer => beer.abv > 6)
    // .sort((a, b) => b.abv - a.abv);

    // const classicBeer = beers
    // .filter(beer => beer.first_brewed < 1)
    // .sort((a, b) => b.abv - a.abv);

    // console.log(highAbvBeer);




    return (
        <div>
            <Nav />
            <CardList beerArr={beerArr}/>;
        </div>
    )
}

// console.log(CardListJSX());

export default App;
