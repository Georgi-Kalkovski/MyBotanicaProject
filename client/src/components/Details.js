import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  let [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data.plant));
  }, [id]);
  return (
    <div>
      <p>Id: {plant.id}</p>
      <p>Scientific Name: {plant.scientific_name}</p>
      <p>Rank: {plant.rank}</p>
      <p>Genus: {plant.genus}</p>
      <p>Family: {plant.family}</p>
      <p>Year: {plant.year}</p>
      <p>Author: {plant.author}</p>
      <p>Bibliography: {plant.bibliography}</p>
      <p>Common Name: {plant.common_name}</p>
      <p>Family Common Name: {plant.family_common_name}</p>
      <p>Image Url: {plant.image_url != undefined ? plant.image_url.replace('floristic', 'plantnet') : plant.image_url}</p>
      <p>Flower Color: {plant.flower_color}</p>
      <p>Flower Conspicuous: {plant.flower_conspicuous}</p>
      <p>Foliage Color: {plant.foliage_color}</p>
      <p>Foliage Texture: {plant.foliage_texture}</p>
      <p>Fruit Color: {plant.fruit_color}</p>
      <p>Fruit Conspicuous: {plant.fruit_conspicuous}</p>
      <p>Fruit Months: {plant.fruit_months}</p>
      <p>Bloom Months: {plant.bloom_months}</p>
      <p>Ground Humidity: {plant.ground_humidity}</p>
      <p>Growth Form: {plant.growth_form}</p>
      <p>Growth Habit: {plant.growth_habit}</p>
      <p>Growth Months: {plant.growth_months}</p>
      <p>Growth Rate: {plant.growth_rate}</p>
      <p>Edible Part: {plant.edible_part}</p>
      <p>Vegetable: {plant.vegetable}</p>
      <p>Edible: {plant.edible}</p>
      <p>Light: {plant.light}</p>
      <p>Soil Nutriments: {plant.soil_nutriments}</p>
      <p>Soil Salinity: {plant.soil_salinity}</p>
      <p>Anaerobic Tolerance: {plant.anaerobic_tolerance}</p>
      <p>Atmospheric Humidity: {plant.atmospheric_humidity}</p>
      <p>Average Height Cm: {plant.average_height_cm}</p>
      <p>Maximum Height Cm: {plant.maximum_height_cm}</p>
      <p>Minimum Root Depth Cm: {plant.minimum_root_depth_cm}</p>
      <p>Ph Maximum: {plant.ph_maximum}</p>
      <p>Ph Minimum: {plant.ph_minimum}</p>
      <p>Planting Days To Harvest: {plant.planting_days_to_harvest}</p>
      <p>Planting Description: {plant.planting_description}</p>
      <p>Planting Sowing Description: {plant.planting_sowing_description}</p>
      <p>Planting Row Spacing Cm: {plant.planting_row_spacing_cm}</p>
      <p>Planting Spread Cm: {plant.planting_spread_cm}</p>
      <p>Synonyms: {plant.synonyms}</p>
      <p>Distributions: {plant.distributions}</p>
      <p>Common Names: {plant.common_names}</p>
      <p>Url Usda: {plant.url_usda}</p>
      <p>Url Tropicos: {plant.url_tropicos}</p>
      <p>Url Tela Botanica: {plant.url_tela_botanica}</p>
      <p>Url Powo: {plant.url_powo}</p>
      <p>Url Plantnet: {plant.url_plantnet}</p>
      <p>Url Gbif: {plant.url_gbif}</p>
      <p>Url Openfarm: {plant.url_openfarm}</p>
      <p>Url Catminat: {plant.url_catminat}</p>
      <p>Url Wikipedia En: {plant.url_wikipedia_en}</p>
    </div>
  );
}

export default Details;