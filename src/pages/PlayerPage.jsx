import Player from "../components/Player/Player";
import RelatedVideos from "../components/Sidebar/RelatedVideos";

const PlayerPage = () => {
  return (
    <div className="w-10/12 mx-auto pt-6 flex items-start gap-10">
      <section className="w-8/12">
        <Player />
      </section>
      <section className="w-4/12">
        <RelatedVideos />
      </section>
    </div>
  );
};

export default PlayerPage;
