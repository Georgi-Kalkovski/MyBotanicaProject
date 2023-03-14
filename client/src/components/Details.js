import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from './Details/Sidebar';
import Content from './Details/Content';
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
      <Sidebar />
      <Content plant={plant} />

    </div>
  );
}

export default Details;