import React from "react";
import "./Css/Shop.css";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/Offers/NewCollections/NewCollections";
import { NewLetter } from "../Components/Newsletter/NewLetter";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLetter />
    </div>
  );
};
