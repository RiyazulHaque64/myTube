import { Link } from "react-router-dom";

const RelatedVideo = ({ videoInfo }) => {
  const { id, title, thumbnail, date, duration, author, views } = videoInfo;
  return (
    <Link to={`/video/${id}`}>
      <div className="flex items-start gap-4">
        <div className="relative w-1/2 duration-300 transition-all hover:scale-105">
          <img
            className="w-full h-auto"
            src={thumbnail}
            alt="Video Thumbnail"
          />
          <p className="absolute bottom-2 right-2 text-gray-200 bg-gray-900 text-sm px-2 rounded font-semibold">
            {duration}
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-gray-800 mb-1">{title}</p>
          <p className="text-gray-500 text-xs mb-1">{author}</p>
          <p className="text-gray-500 text-xs">
            <span>{views} views, </span>
            <span>{date}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideo;
