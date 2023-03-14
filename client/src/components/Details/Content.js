import Main from './Content/Main';
import Specification from './Content/Specification';
import Growing from './Content/Growing';
import Images from './Content/Images';
import Distribution from './Content/Distribution';
import Synonyms from './Content/Synonyms';
import Model from './Content/Model';

function Content({ plant }) {

  return (
    <div className="content">

      {/* MAIN */}
      <Main plant={plant} />

      <hr></hr>

      {/* SPECIFICATIONS */}
      <Specification plant={plant} />

      {/* GROWING */}
      <Growing plant={plant} />


      {/* IMAGES */}
      <Images plant={plant} />

      {/* DISTRIBUTION */}
      <Distribution plant={plant} />

      {/* SYNONYMS */}
      <Synonyms plant={plant} />

      {/* MODEL */}
      <Model plant={plant} />
    </div>
  );
}

export default Content;