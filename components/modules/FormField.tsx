import { FormFieldProps } from '@components';
import { slugify } from '@utils';
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot';
import FaCheck from '@meronex/icons/fa/FaCheck';
import { colors } from '@styles';

const FormField = ({
  _key,
  choices,
  disabled,
  description,
  hideLabel,
  initialValue,
  label,
  placeholder,
  readOnly,
  required,
  type,
  validation,
}: FormFieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${_key}`;

  return (
    <>
      {type === 'textarea' ? (
        <label
          data-testid="form-field-textarea"
          className={`${type} block mb-8`}
          htmlFor={fieldId}
        >
          <span
            className={`text-xl font-semibold${hideLabel ? ' hidden' : ''}`}
          >
            {label}
          </span>
          {description && <p>{description}</p>}
          <textarea
            name={fieldId}
            id={fieldId}
            rows={4}
            className="fieldInput block border-thin border-black-200 w-full px-2 md:px-5 py-1 md:py-2 md:text-lg bg-transparent"
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            placeholder={placeholder}
            defaultValue={initialValue}
          />
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div data-testid="form-field-choice" className={`${type} block mb-8`}>
          <p className={`text-xl font-semibold${hideLabel ? ' hidden' : ''}`}>
            {label}
          </p>
          {description && <p>{description}</p>}
          <div className="choices flex gap-5">
            {choices?.map(
              (choice) =>
                choice.copy && (
                  <label
                    key={choice._key}
                    className="flex flex-row-reverse justify-start gap-1"
                    htmlFor={`${slugify(choice.copy)}_${choice._key}`}
                  >
                    <span>{choice.copy}</span>
                    <input
                      type={type}
                      id={`${slugify(choice.copy)}_${choice._key}`}
                      name={fieldId}
                      value={choice.value}
                      className="h-0 w-0 overflow-hidden opacity-0"
                    />
                    <div
                      className={`flex items-center content-center justify-center w-5 h-5 bg-white-100 border-thin border-black-500 ${
                        type === 'radio' ? 'rounded-full ' : ''
                      }${type}-indicator`}
                    >
                      {type === 'radio' && (
                        <GoPrimitiveDot color={colors.white} size={15} />
                      )}
                      {type === 'checkbox' && (
                        <FaCheck color={colors.white} size={12} />
                      )}
                    </div>
                  </label>
                )
            )}
          </div>
        </div>
      ) : (
        <label
          data-testid="form-field"
          className={`${type} block mb-8`}
          htmlFor={fieldId}
        >
          <span
            className={`text-xl font-semiboldå${hideLabel ? ' hidden' : ''}`}
          >
            {label}
          </span>
          {description && <p>{description}</p>}
          <input
            name={fieldId}
            pattern={validation}
            id={fieldId}
            className="fieldInput block border-thin border-black-200 w-full px-2 md:px-5 py-1 md:py-2 md:text-lg bg-transparent"
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            placeholder={placeholder}
            defaultValue={initialValue}
          />
        </label>
      )}
    </>
  );
};

export { FormField };
