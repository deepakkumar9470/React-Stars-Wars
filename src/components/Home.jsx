import React, { useState,useEffect } from "react";
import axios from "axios";
import {useQuery} from '@tanstack/react-query'
import Planet from "./Planet";
const Home = () => {

  const getStarsData = async () => {
    try {
      // const res = await axios.get("https://swapi.dev/api/planets/?format=json");
      const res = await fetch("https://swapi.dev/api/planets/?format=json");
      const data = await res.json()
      return data.results
    } catch (error) {
      console.log(error)
    } 
  }; 

  const {isPending, error, data } = useQuery({
    queryKey: ["stars"],
    queryFn : getStarsData
  })


  console.log(data)
  return (
    <div className="px-20 py-4 grid grid-cols-3 gap-x-10 gap-y-2">
      {
        data?.map((item,i)=>(
         <Planet key={item.name} planets={item}/>
        ))
      }
       
    </div>
  );
};

export default Home;
