import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bookSVG from './svg/book.svg';
import growingSVG from './svg/growing.svg';
import specSVG from './svg/spec.svg';
import imagesSVG from './svg/images.svg';
import distribSVG from './svg/distrib.svg';
import synonymsSVG from './svg/synonyms.svg';
import flowerSVG from './svg/flower.svg';
import leafSVG from './svg/leaf.svg';
import fruitSVG from './svg/fruit.svg';

function Content({ plant }) {
  let commonName = [];
  let distributions = [];
  let synonyms = [];
  let light = '';
  let atmHum = '';

  if (plant.common_names) {
    commonName = plant.common_names.split(',')[0];
  }

  if (plant.distributions) {
    distributions = plant.distributions.split(',');
  }

  if (plant.synonyms) {
    synonyms = plant.synonyms.split(',');
  }

  switch (plant.light) {
    case '0': light = 'Dark night (< 1 lux)'; break;
    case '1': light = 'Full moon on a clear night (10 lux)'; break;
    case '2': light = 'Public areas with dark surroundings (50 lux)'; break;
    case '3': light = 'Very dark overcast day (100 lux)'; break;
    case '4': light = 'Overcast day (1000 lux)'; break;
    case '5': light = 'Cloudy day (5 000 lux)'; break;
    case '6': light = 'Full daylight without direct sunlight (10 000 lux)'; break;
    case '7': light = 'Full daylight with some direct sunlight (50 000 lux)'; break;
    case '8': light = 'Full daylight with a lot of direct sunlight (75 000 lux)'; break;
    case '9': light = 'Direct sunlight (100 000 lux)'; break;
    default: light = 'unknown';
  }

  switch (plant.atmospheric_humidity) {
    case '0': atmHum = 'Less than 10%'; break;
    case '1': atmHum = '10%'; break;
    case '2': atmHum = '20%'; break;
    case '3': atmHum = '30%'; break;
    case '4': atmHum = '40%'; break;
    case '5': atmHum = '50%'; break;
    case '6': atmHum = '60%'; break;
    case '7': atmHum = '70%'; break;
    case '8': atmHum = '80%'; break;
    case '9': atmHum = '> 90%'; break;
    default: atmHum = 'unknown';
  }

  return (
    <div className="content">

      {/* MAIN */}
      <div className="main">
        <Row key={plant.scientific_name} className='main-card'>
          <Col className='cropped image'>
            {plant.image_url && (
              <Image src={plant.image_url.replace('bs.floristic.org', 'bs.plantnet.org')} />
            )}
          </Col>
          <Col className='main-card-text'>
            <h2>
              {plant.scientific_name}
            </h2>
            <h3>{commonName}</h3>
            <p><img className='svg' src={bookSVG} /> {plant.author} {plant.year} - {plant.bibliography}</p>
          </Col>
        </Row>
      </div>

      <hr></hr>


      {/* SPECIFICATIONS */}
      <div id="specifications">
        <h2>
          <img className='svg' src={specSVG} />
          <span> Specifications</span>
        </h2>
        <Row key={plant.scientific_name} className='main-card'>
          <p>{distributions[0]}</p>
          <div className='sub-row'>
            <Col>
              <p>Height: {plant.average_height_cm} cm average</p>
              <p>Growth habit: {plant.growth_habit}</p>
              <p>Duration: { }</p>
              <p>Edible part(s): {plant.edible_part}</p>
            </Col>
            <Col className='sub-second-col'>
              <p>{<img className='svg' src={flowerSVG} />} {plant.flower_conspicuous === '' ? 'unknown,' : (plant.flower_conspicuous == 'true' ? "visible" : "invisible")} {plant.flower_color === '' ? 'unknown' : plant.flower_color} flowers</p>
              <p>{<img className='svg' src={leafSVG} />} {plant.foliage_texture === '' ? 'unknown,' : plant.foliage_texture} {plant.foliage_color === '' ? 'unknown' : plant.foliage_color} foliage</p>
              <p>{<img className='svg' src={fruitSVG} />} {plant.fruit_conspicuous === '' ? 'unknown,' : (plant.fruit_conspicuous == 'true' ? "visible" : "invisible")} {plant.fruit_color === '' ? 'unknown' : plant.fruit_color} fruits</p>
            </Col>
          </div>
        </Row>
      </div>

      {/* GROWING */}
      <div id="growing">
        <h2>
          <img className='svg' src={growingSVG} />
          <span> Growing</span>
        </h2>
        <div className='sub-row'>
          <Col>
            <p>Light: {light}</p>
            <p>Atmospheric Humidity: {atmHum}</p>
            <p>Ph: Best between {plant.ph_minimum} and {plant.ph_maximum}</p>
            <p>[[[Precipitations: Best between unknown and unknown]]]</p>
            <p>[[[Temperature: Best between unknown°C and unknown°C]]]</p>
          </Col>
          <Col className='sub-second-col'>
            <p>[[[Cloud Sun]]]</p>
            <p>[[[Wet]]]</p>
          </Col>
        </div>

        <h3>Soil</h3>
        <div className='sub-row'>
          <Col>
            <p>[[[Soil humidity: unknown]]]</p>
            <p>[[[Soil nutriments: High (≈1000 µg N / l)]]]</p>
            <p>[[[Soil salinity: Untolerant]]]</p>
            <p>[[[Soil texture: unknown]]]</p>
          </Col>
          <Col className='sub-second-col'>
            <p>[[[Humidity]]]</p>
            <p>[[[Nutriments]]]</p>
            <p>[[[Salinity]]]</p>
            <p>[[[Texture]]]</p>
          </Col>
        </div>

        <h3>Calendar</h3>
        <p>[[[Calendar]]]</p>

      </div>

      {/* IMAGES */}
      <div id="images">
        <h2>
          <img className='svg' src={imagesSVG} />
          <span> Images</span>
        </h2>
        <p>[[[Images]]]</p>
      </div>

      {/* DISTRIBUTION */}
      <div id="distribution">
        <h2>
          <img className='svg' src={distribSVG} />
          <span> Distribution</span>
        </h2>
        <p>{distributions.join(', ')}</p>
      </div>

      {/* SYNONYMS */}
      <div id="synonyms">
        <h2>
          <img className='svg' src={synonymsSVG} />
          <span> Synonyms</span>
        </h2>
        <p>{synonyms.join(', ')}</p>
      </div>

      {/* MODEL */}
      <div id="model">
        <h2>Model</h2>
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
        <p>Image Url: {plant.image_url !== undefined ? plant.image_url.replace('bs.floristic.org', 'bs.plantnet.org') : plant.image_url}</p>
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
    </div>
  );
}

export default Content;