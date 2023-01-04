interface BgVideoProps {
  backgroundVideo: any;
  inView: boolean;
}

const BgVideo = ({ backgroundVideo, inView }: BgVideoProps) => {
  return (
    <div
      data-testid="bg-video-container"
      className="absolute overflow-hidden h-full top-0 left-0 w-full"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-video">
        {inView && (
          <div className="react-player">
            <video
              controls={false}
              autoPlay
              loop
              width="100%"
              height="100%"
              muted
              src={backgroundVideo}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { BgVideo };
