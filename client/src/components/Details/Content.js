import Main from './Content/Main';
import Specifications from './Content/Specifications';
import Growing from './Content/Growing';
import Images from './Content/Images';
import Distribution from './Content/Distribution';
import Synonyms from './Content/Synonyms';
import Model from './Content/Model';
import './Content.css';

function Content({ plant }) {

  return (
    <div className="content">
      <Main plant={plant} />
      <hr />
      <Specifications plant={plant} />
      <Growing plant={plant} />
      <Images plant={plant} />
      <Distribution plant={plant} />
      <Synonyms plant={plant} />
      <Model plant={plant} />
    </div>
  );
}

export default Content;