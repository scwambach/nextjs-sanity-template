import { Button, LinkObject } from '@components';

const FourOhFourPage = () => {
  return (
    <div className="bg-white-500 py-20 h-screen flex flex-col justify-center">
      <div className="text-center">
        <div className="text-[30vw] font-bold leading-[1]">404</div>
        <div className="text-blue-500 font-bold text-3xl mb-2">
          Page Not Found
        </div>
        <p className="mb-10">
          We&apos;re sorry, the page your have looked for does not exist
        </p>
        <Button>
          <LinkObject
            internalLink={{ slug: { current: '/' } }}
            copy="Go Back To Home pagge"
          />
        </Button>
      </div>
    </div>
  );
};

export default FourOhFourPage;
