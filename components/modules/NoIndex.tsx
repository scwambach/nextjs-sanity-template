import { Container } from '@components';
import { breakpoints } from '@styles';

const NoIndex = () => {
  return (
    <div className="text-xl md:text-3xl font-bold text-center flex flex-col justify-center items-center h-screen">
      <Container maxWidth={breakpoints.md}>
        <h1 className="text-3xl md:text-5xl mb-10 uppercase tracking-wider">
          Welcome to the starter&nbsp;template!
        </h1>
        Looks like you might be missing some data. Please Refer
        to&nbsp;the&nbsp;
        <a
          className="text-blue-500 underline hover:tracking-wider hover:text-blue-200 transition-all"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/scwambach/nextjs-sanity-template#readme"
        >
          README.md
        </a>
        .
        <br />
        <br />
        You can skip straight to the portion about importing the
        example&nbsp;data&nbsp;
        <a
          className="text-blue-500 underline hover:tracking-wider hover:text-blue-200 transition-all"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/scwambach/nextjs-sanity-template#data"
        >
          here
        </a>
        .
        <br />
        <br />
        Or just go straight to the{' '}
        <a
          className="text-blue-500 underline hover:tracking-wider hover:text-blue-200 transition-all"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sanity.io/manage"
        >
          Sanity Studio
        </a>{' '}
        and start entering&nbsp;in&nbsp;content!
      </Container>
    </div>
  );
};

export { NoIndex };
