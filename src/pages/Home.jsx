import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import Tags from "../components/Tags/Tags";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import { useEffect } from "react";
import { fetchVideos } from "../redux/features/videos/videosSlice";
import { fetchTags } from "../redux/features/tags/tagsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
    dispatch(fetchTags());
  }, [dispatch, tags, search]);

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
