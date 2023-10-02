import { Link } from "react-router-dom";

const VideoThumbnail = ({ video }) => {
  const { id, thumbnail, title, author, views, date, duration } = video;
  return (
    <Link to={`/video/${id}`}>
      <div className="duration-300 transition-all hover:scale-105">
        <div className="relative">
          <img
            className="w-full h-auto"
            src={thumbnail}
            alt="Video Thumbnail"
          />
          <p className="absolute bottom-2 right-2 text-gray-200 bg-gray-900/80 text-sm px-2 rounded font-semibold">
            {duration}
          </p>
        </div>
        <div className="flex gap-2 mt-3 pb-4">
          <img
            className="h-6 w-6 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt=""
          />
          <div>
            <p className="text-gray-800 mb-1">{title}</p>
            <p className="text-gray-500 text-xs mb-1">{author}</p>
            <p className="text-gray-500 text-xs">
              <span>{views}, </span>
              <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoThumbnail;
