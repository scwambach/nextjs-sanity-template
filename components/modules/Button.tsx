interface ButtonProps {
  children: any;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <span
      data-testid="button"
      className={`m-0 inline-block button text-center relative cursor-pointer border-thin border-black-500 bg-black-500 text-white-100 overflow-hidden${
        className ? ` ${className}` : ''
      }`}
    >
      <div className="slideIn ease-in-out absolute bottom-0 left-0 w-full">
        <div className="top-1/2 w-full h-1/2 bg-black-200 bottom-0 left-0" />
        <div className="top-full w-full h-1/2 bg-white-100 bottom-0 left-0" />
      </div>
      <div className="relative">{children}</div>
    </span>
  );
};

export { Button };
