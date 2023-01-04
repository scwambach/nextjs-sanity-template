import { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import ReactPlayer from 'react-player';
import { AiOutlineClose } from '@meronex/icons/ai';
import { colors } from '@styles';

type VideoModalProps = {
  video: string;
  active: boolean;
  setActive: any;
};

const VideoModal = ({ video, active, setActive }: VideoModalProps) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && video && (
        <Portal>
          <div
            data-testid="videoModal"
            className={`fixed bg-overlay z-40 h-screen w-screen top-0 left-0 transition-all ease-in-out flex flex-col justify-center items-center ${
              active
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 blur-3xl pointer-events-none'
            }`}
          >
            <button
              className="absolute top-10 right-10 cursor-pointer z-40"
              title="Close Video"
              onClick={(e) => {
                e.preventDefault();
                setActive(false);
              }}
            >
              <AiOutlineClose color={colors.white} size={70} />
            </button>

            <div className="player-wrapper">
              {active && (
                <ReactPlayer
                  data-testid="videoPlayer"
                  className="react-player"
                  url={
                    video.indexOf('http') < 0 ? `/videos/${video}.mp4` : video
                  }
                  controls
                />
              )}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export { VideoModal };
