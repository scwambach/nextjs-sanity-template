import ClipLoader from 'react-spinners/ClipLoader';
interface SpinnerProps {
  className?: string;
  color?: string;
  size?: number;
}

const Spinner = ({ className, color, size }: SpinnerProps) => {
  return (
    <>
      <ClipLoader
        className={className}
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export { Spinner };
