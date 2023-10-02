import { useEffect } from "react";
import Player from "../components/Player/Player";
import RelatedVideos from "../components/Sidebar/RelatedVideos";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../redux/features/video/videoSlice";
import { useParams } from "react-router-dom";

const PlayerPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  return (
    <div className="w-10/12 mx-auto pt-6 flex items-start gap-10">
      <section className="w-8/12">
        {isLoading ? (
          <h2>Loading ....</h2>
        ) : isError ? (
          <h2>{error}</h2>
        ) : video ? (
          <Player video={video} />
        ) : (
          <h2>The content may be deleted!</h2>
        )}
      </section>
      <section className="w-4/12">
        <RelatedVideos id={id} tags={video.tags} />
      </section>
    </div>
  );
};

export default PlayerPage;
