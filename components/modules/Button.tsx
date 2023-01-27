interface ButtonProps {
  children: any;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <span
      className={`m-0 text-xs md:text-base inline-block lg:hover:bg-blue-500 button text-center relative cursor-pointer bg-black-900 text-white-100 overflow-hidden${
        className ? ` ${className}` : ''
      }`}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <div className="top-1/2 w-full h-1/2 bg-black-200 bottom-0 left-0" />
        <div className="top-full w-full h-1/2 bg-white-100 bottom-0 left-0" />
      </div>
      <div className="relative">{children}</div>
    </span>
  );
};

export { Button };
