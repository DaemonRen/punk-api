import React from "react";
import './App.scss';
import beers from "./Data/data";
import CardListJSX from "./Components/CardList/CardList";


const App = () => {


    return <>{CardListJSX()}</>;
}

console.log(CardListJSX());

export default App;
