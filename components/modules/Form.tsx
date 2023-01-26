import {
  Button,
  FormProps,
  FormField,
  PortableTextModule,
  Spinner,
} from '@components';
import { colors } from '@styles';
import { useState } from 'react';
import styled from 'styled-components';

const Form = ({
  _id,
  beforeSubmitCopy,
  className,
  description,
  errorMessage,
  formClassName,
  formFields,
  heading,
  recipient,
  subject,
  submitButtonCopy,
  thankYouMessage,
}: FormProps) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<any>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const collectData = () => {
    const form = global.document.getElementById(`form_${_id}`);
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');

    const serial = {
      subject,
      recipient,
      currentPath: window.location.pathname,
    };

    inputs.forEach((input) => {
      serial[input.name.split('_')[0]] = input.value;
    });

    textareas.forEach((input) => {
      serial[input.name.split('_')[0]] = input.value;
    });

    setPayload(serial);
  };

  const postForm = async () => {
    const formData = await fetch(`${process.env.SITE_URL}/api/mailer`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const data = await formData.json();

    if (data.message) {
      setLoading(false);
      setSubmitted(true);

      if (data.message === 'Success') {
        setError(false);
        setSuccess(true);
      } else {
        setSuccess(false);
        setError(true);
      }
    } else {
      setSubmitted(true);
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <FormContainer className={`form${className ? ` ${className}` : ''}`}>
      {heading && <h4 className="block font-display text-2xl">{heading}</h4>}

      {description && (
        <PortableTextModule text={description} className="-mt-4" />
      )}
      <form
        id={`form_${_id}`}
        className={formClassName ? ` ${formClassName}` : undefined}
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          postForm();
        }}
      >
        {!submitted && (
          <fieldset
            disabled={loading}
            onChange={() => {
              collectData();
            }}
          >
            {formFields?.map(
              (field, index) =>
                field && <FormField key={field._key} {...field} index={index} />
            )}
            {beforeSubmitCopy && (
              <PortableTextModule
                text={beforeSubmitCopy}
                className="text-sm md:text-md my-8"
              />
            )}
            <Button className="block w-full">
              <button type="submit">
                <span className="relative">
                  {loading && (
                    <Spinner
                      className="absolute -left-5 top-[2px]"
                      size={17}
                      color={colors.white}
                    />
                  )}
                  {submitButtonCopy}
                </span>
              </button>
            </Button>
          </fieldset>
        )}
        {error && (
          <p className="font-bold text-2xl text-blue-500">{errorMessage}</p>
        )}
        {success && (
          <p className="font-bold text-2xl text-green-700">{thankYouMessage}</p>
        )}
      </form>
    </FormContainer>
  );
};

export { Form };

const FormContainer = styled.div`
  fieldset {
    &:disabled {
      pointer-events: none;
      input,
      textarea,
      p {
        opacity: 0.4;
      }
    }
  }
`;
