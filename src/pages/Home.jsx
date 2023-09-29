import Pagination from "../components/Pagination/Pagination";
import Tags from "../components/Tags/Tags";
import VideoContainer from "../components/VideoContainer/VideoContainer";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <section>
        <Tags />
      </section>
      <section>
        <VideoContainer />
      </section>
      <section>
        <Pagination />
      </section>
    </div>
  );
};

export default Home;
