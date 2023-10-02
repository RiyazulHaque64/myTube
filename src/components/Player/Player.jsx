import { BiDislike, BiLike } from "react-icons/bi";

const Player = ({ video }) => {
  const { title, description, link, likes, unlikes, date } = video;
  return (
    <div className="w-full">
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title="some video title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="py-4">
        <h1 className="text-gray-800 font-semibold text-lg">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">Uploaded on {date}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BiLike />
              <span className="text-gray-600">{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <BiDislike />
              <span className="text-gray-600">{unlikes}</span>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
