import { useDispatch, useSelector } from "react-redux";
import RelatedVideo from "./RelatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice";

const RelatedVideos = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <h2>Loading ....</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : relatedVideos.length > 0 ? (
        relatedVideos.map((relatedVideo) => (
          <RelatedVideo key={relatedVideo.id} videoInfo={relatedVideo} />
        ))
      ) : (
        <h2>No related video</h2>
      )}
    </div>
  );
};

export default RelatedVideos;
