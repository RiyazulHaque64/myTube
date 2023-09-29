const RelatedVideo = () => {
  return (
    <div className="flex gap-4">
      <div className="relative w-1/2 duration-300 transition-all hover:scale-105">
        <img
          className="w-full h-auto"
          src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
          alt="Video Thumbnail"
        />
        <p className="absolute bottom-2 right-2 text-gray-200 bg-gray-900 text-sm px-2 rounded font-semibold">
          12:32
        </p>
      </div>
      <div>
        <p className="text-gray-800 mb-1">Video Title</p>
        <p className="text-gray-500 text-xs mb-1">Learn with Rapu</p>
        <p className="text-gray-500 text-xs">
          <span>200 views, </span>
          <span>12 May 2023</span>
        </p>
      </div>
    </div>
  );
};

export default RelatedVideo;
