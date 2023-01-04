interface Props {
  maxWidth?: number | string;
  children?: any;
  edges?: boolean;
  className?: string;
}

const Container = ({ maxWidth, edges = false, children, className }: Props) => {
  return (
    <div
      data-testid="container"
      className={`container w-full mx-auto${
        !edges ? ' p-wrapMobile md:p-wrap' : ''
      }${className ? ` ${className}` : ''}`}
      style={{
        maxWidth: typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`,
      }}
    >
      {children}
    </div>
  );
};

export { Container };
