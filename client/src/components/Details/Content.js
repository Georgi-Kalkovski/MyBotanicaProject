import Main from './Content/Main';
import Specifications from './Content/Specifications';
import Growing from './Content/Growing';
import Images from './Content/Images';
import Distribution from './Content/Distribution';
import CommonNames from './Content/CommonNames';
import Synonyms from './Content/Synonyms';
import Links from './Content/Links';
import Model from './Content/Model';
import Calendar from "./Content/Calendar";
import './Content.css';

function Content({ plant }) {

  return (
    <div className="content">
      <Main plant={plant} />
      <hr className='content-hr' />
      {plant.growth_months || plant.bloom_months || plant.fruit_months ? <Calendar plant={plant} /> : ''}
      <Specifications plant={plant} />
      <Growing plant={plant} />
      <Images plant={plant} />
      {plant.distributions ? <Distribution plant={plant} /> : ''}
      {plant.common_names ? <CommonNames plant={plant} /> : ''}
      {plant.synonyms ? <Synonyms plant={plant} /> : ''}
      <Links plant={plant} />
      <Model plant={plant} />
    </div>
  );
}

export default Content;