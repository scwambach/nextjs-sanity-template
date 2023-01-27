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
  index,
  type,
  validation,
}: FormFieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${_key}`;

  return (
    <>
      {type === 'textarea' ? (
        <label className={`${type} block mb-8`} htmlFor={fieldId}>
          <span
            className={`text-base md:text-xl font-bold${
              hideLabel ? ' hidden' : ''
            }`}
          >
            {label}
          </span>
          {description && (
            <p className="base-copy-size sml mb-3">{description}</p>
          )}
          <textarea
            name={fieldId}
            id={fieldId}
            rows={4}
            className="fieldInput block border-thin bg-white-100 border-black-200 w-full px-2 md:px-5 py-1 md:py-2 md:text-lg"
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            placeholder={placeholder}
            defaultValue={initialValue}
          />
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div className={`${type} block mb-8`}>
          <p
            className={`text-base md:text-xl font-bold${
              hideLabel ? ' hidden' : ''
            }`}
          >
            {label}
          </p>
          {description && (
            <p className="base-copy-size sml mb-3">{description}</p>
          )}
          <div className="choices flex gap-5">
            {choices?.map(
              (choice) =>
                choice.copy && (
                  <label
                    key={choice._key}
                    className="flex flex-row-reverse justify-start gap-1"
                    htmlFor={`${slugify(choice.copy)}_${choice._key}-${index}`}
                  >
                    <span>{choice.copy}</span>
                    <input
                      type={type}
                      id={`${slugify(choice.copy)}_${choice._key}-${index}`}
                      name={fieldId}
                      value={choice.value}
                      className="bg-white-100 h-0 w-0 overflow-hidden opacity-0"
                    />
                    <div
                      className={`flex items-center content-center justify-center w-5 h-5 bg-white-100 border-thin border-black-900 ${
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
        <label className={`${type} block mb-8`} htmlFor={fieldId}>
          <span
            className={`text-base md:text-xl font-bold ${
              hideLabel ? ' hidden' : ''
            }`}
          >
            {label}
          </span>
          {description && (
            <p className="base-copy-size sml mb-3">{description}</p>
          )}
          <input
            name={fieldId}
            pattern={validation}
            id={fieldId}
            className="fieldInput block border-thin bg-white-100 border-black-200 w-full px-2 md:px-5 py-1 md:py-2 md:text-lg"
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
