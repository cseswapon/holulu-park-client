import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Manager from "../Main/Manager/Manager";
import Service from "../Main/Service/Service";
import Owlcaru from "../Owlcaru/Owlcaru";

const Home = () => {
  useEffect(() => {
    document.title = "Holulu Theme Park-Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Manager></Manager>
      <Service></Service>
      <Owlcaru></Owlcaru>
    </div>
  );
};

export default Home;
