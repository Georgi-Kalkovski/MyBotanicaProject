import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from './Details/Breadcrumbs';
import Sidebar from './Details/Sidebar';
import Content from './Details/Content';
import './Details.css';

function Details() {
  const { id } = useParams();
  let [plant, setPlant] = useState([]);

  useEffect(() => {
    fetch(`https://mybotanica-api.onrender.com/api/species/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data.plant));
  }, [id]);

  const paths = [
    { label: 'Explore', url: '/' },
    { label: `${plant.family}`, url: `/family/${plant.family}` },
    { label: `${plant.genus}`, url: `/genus/${plant.genus}` },
  ];

  return (
    <div>
      <Breadcrumbs paths={paths} />
      <Sidebar plant={plant} />
      <Content plant={plant} />
    </div>
  );
}

export default Details;