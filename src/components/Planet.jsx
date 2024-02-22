import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const Planet = ({planets}) => {
    
    // const getResidents = async () => {
    //     try {
    //       const res = await axios.get("https://swapi.dev/api/planets/?format=json");
    //       // const data = await res.json()
    //       return res.results
    //     } catch (error) {
    //       console.log(error)
    //     } 
    //   };


    //   const getResidents = async (residentUrl) => {
    //     const response = await fetch(residentUrl);
    //     return response.json();
    //   };

   
    const fetchResident = async (residentUrl) => {
      try {
        const response = await fetch(residentUrl);
        const data = await response.json()
        return data;
      } catch (error) {
        console.log(error)
      }
      };
      
      const {data} = useQuery({
        queryKey :["residents", planets.name],
        queryFn : 
        async () => {
            const residentData = await Promise.all(
              planets.residents.map((residentUrl) => fetchResident(residentUrl))
            );
            return residentData;
          }
      })
    console.log(data)
  return (
    <div className="bg-gray-600 text-white w-[400px] h-[250px] rounded-md">
    <h2>{planets.name}</h2>
    <h2>{planets.climate}</h2>
    <h2>{planets.population}</h2>
    <h2>{planets.terrain}</h2>
    {data && (
        <>
          <h3>Residents:</h3>
          <ul>
            {data.map((resident) => (
              <li className='text-red-600' key={resident.name}>
                <p>Name: {resident.name}</p>
                <p>Height: {resident.height}</p>
                <p>Mass: {resident.mass}</p>
                <p>Gender: {resident.gender}</p>
              </li>
            ))}
          </ul>
        </>
      )}
</div>
  )
}

export default Planet