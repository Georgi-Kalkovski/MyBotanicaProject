import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from './Sidebar';
import Content from './Content';
import './Details.css';

function Details() {
  const { id } = useParams();
  let [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data.plant));
  }, [id]);
  return (
    <div className='details-main'>
      <Content plant={plant}/>
      <Sidebar />
      
    </div>
  );
}

export default Details;