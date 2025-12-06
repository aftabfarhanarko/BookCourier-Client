import React from "react";
import Banner from "./Banner";
import WhyChooseBook from "./WhyChooseBook";
import BookFicher from "./BookFicher";
import PremiumBook from "./PremiumBook";
import BookFeatureSection from "./BookFeatureSection";
import LetasCard from "./LetasCard";
import MapNow from "./MapNow";
import Cousebooksconires from "./Cousebooksconires";
// import { Typed } from 'react-typed';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" w-11/12 mx-auto">
        <section className=" mt-30">
          <PremiumBook></PremiumBook>
        </section>
        <section className=" w-10/12 mx-auto mt-30">
          <BookFeatureSection></BookFeatureSection>
        </section>
        <section className=" w-11/12 mx-auto mt-30">
          <LetasCard></LetasCard>
        </section>
        <section className=" mt-30">
          <BookFicher></BookFicher>
        </section>
        <section className=" mt-30">
          <MapNow></MapNow>
        </section>
        <section className=" mt-30">
          <Cousebooksconires></Cousebooksconires>
        </section>
        <section className=" w-10/12 mx-auto mt-30">
          <WhyChooseBook></WhyChooseBook>
        </section>
      </div>
    </div>
  );
};

export default Home;
