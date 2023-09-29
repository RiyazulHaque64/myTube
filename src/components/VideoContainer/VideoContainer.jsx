import VideoThumbnail from "./VideoThumbnail";

const VideoContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
      <VideoThumbnail />
    </div>
  );
};

export default VideoContainer;
