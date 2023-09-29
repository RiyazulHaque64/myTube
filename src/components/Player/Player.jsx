import { BiDislike, BiLike } from "react-icons/bi";

const Player = () => {
  return (
    <div className="w-full">
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
        title="some video title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="py-4">
        <h1 className="text-gray-800 font-semibold text-lg">
          Some video title
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">Uploaded on 23 May 2023</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <BiLike />
              <span className="text-gray-600">100</span>
            </div>
            <div className="flex items-center gap-1">
              <BiDislike />
              <span className="text-gray-600">100</span>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-sm text-gray-700">Description</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
