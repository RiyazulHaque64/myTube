import { useSelector } from "react-redux";
import VideoThumbnail from "./VideoThumbnail";

const VideoContainer = () => {
  const { isLoading, videos, isError, error } = useSelector(
    (state) => state.videos
  );

  return (
    <div className="grid grid-cols-4 gap-6">
      {isLoading ? (
        <h2>Loading....</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : videos?.length > 0 ? (
        videos.map((video, index) => (
          <VideoThumbnail key={index} video={video} />
        ))
      ) : (
        <h2>No content available</h2>
      )}
    </div>
  );
};

export default VideoContainer;
