import React from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

import { ClassNames } from "@emotion/react";

interface Props {
  className: string;
  options: any;
  onReady?: (player: Player) => void;
}

export const VideoJS: React.FC<Props> = (props) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<Player | null>();
  const { options, onReady, className } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current!.appendChild(videoElement);

      playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(playerRef.current!);
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [onReady, options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className={className} data-vjs-player>
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              "h-full",
              css`
                video {
                  object-fit: cover;
                }
              `
            )}
            ref={videoRef}
          />
        )}
      </ClassNames>
    </div>
  );
};

export default VideoJS;
