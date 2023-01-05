import {
  BlockProps,
  Container,
  Form,
  FormProps,
  HeadingElement,
  PortableTextModule,
} from '@components';
import { breakpoints } from '@styles';
import { indexHeading, slugify } from '@utils';

interface FormCtaProps extends BlockProps {
  form: FormProps;
  message?: any;
}

const FormCta = ({
  backgroundColor,
  children,
  className,
  form,
  colorCutOff,
  heading,
  index,
  message,
  subHeading,
}: FormCtaProps) => {
  return (
    <div
      className={`formCta py-12 lg:py-20 relative${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      <Container
        maxWidth={breakpoints.xl}
        className="relative flex items-center flex-col sm:flex-row gap-14 sm:gap-10 lg:gap-32"
      >
        <div className="sm:w-1/2">
          {subHeading && (
            <p className="text-xl mb-5 text-red-500 font-display">
              {subHeading}
            </p>
          )}

          {heading && (
            <HeadingElement
              type={indexHeading(index)}
              className="font-display text-xl md:text-2xl lg:text-3xl max-w-md"
            >
              {heading}
            </HeadingElement>
          )}
          {message && (
            <PortableTextModule
              text={message}
              className="text-sm md:text-md mt-10"
            />
          )}
        </div>
        {form && (
          <div
            className={`sm:w-1/2 ${
              colorCutOff ? 'border-2 border-black-900' : ''
            } -mt-10 lg:-mt-0 ${
              backgroundColor ? slugify(backgroundColor.toLowerCase()) : ''
            }`}
          >
            <Form
              {...form}
              className={`text-black-900 p-4 md:p-8 lg:p-12  ${
                backgroundColor === 'bg-white-100'
                  ? 'bg-white-500'
                  : 'bg-white-100'
              }`}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export { FormCta };
