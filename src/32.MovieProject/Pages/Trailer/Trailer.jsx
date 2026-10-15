
import React from "react";
import { fetchMovieVideos } from "../../Api/Api";
import YouTube from "react-youtube";

const Traler = ({ id }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchMovieVideos(id)
      .then((d) => {
        console.log("TMDB RESPONSE:", d);
        console.log("VIDEOS:", d.results);

        if (d.results && d.results.length > 0) {
          // Get a YouTube video
          const video = d.results.find(
            (item) => item.site === "YouTube"
          );

          console.log("SELECTED VIDEO:", video);

          setData(video || null);
        }
      })
      .catch((error) => {
        console.error("API ERROR:", error);
      });
  }, [id]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  if (!data) {
    return <p>Trailer not available</p>;
  }

  return (
    <center>
    <div>
      <h3>{data.name}</h3>

      <YouTube
        videoId={data.key}
        opts={opts}
      />
    </div>
    </center>
  );
};

export default Traler;