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
          {heading && (
            <HeadingElement
              type={indexHeading(index)}
              className="heading-element"
            >
              {heading}
            </HeadingElement>
          )}
          {subHeading && <p className="sub-heading">{subHeading}</p>}
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
              colorCutOff ? 'border-[1px] border-black-900' : ''
            } ${backgroundColor ? slugify(backgroundColor.toLowerCase()) : ''}`}
          >
            <Form
              {...form}
              className={`text-black-900 p-4 md:p-8 lg:p-12  ${
                backgroundColor === 'bg-white-100'
                  ? 'bg-blue-500'
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
