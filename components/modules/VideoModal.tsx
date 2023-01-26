import { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import ReactPlayer from 'react-player';
import { IosClose } from '@meronex/icons/ios';
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
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    });
  }, []);
  return (
    <>
      {hasWindow && video && (
        <Portal>
          <div
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
              <IosClose size={50} color={colors.white} />
            </button>

            <div className="player-wrapper" id="videoPlayer">
              {active && (
                <ReactPlayer
                  className="react-player"
                  playing
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
