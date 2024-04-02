// components/TextField.tsx
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError | undefined;
}

const TextField = forwardRef(
  function TextField(
    { label, error, ...rest }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    return (
      <div className="mb-4">
        <label htmlFor={rest.id || rest.name} className="block mb-2">
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          className={`w-full text-black border rounded py-2 px-3 ${error ? 'border-red-500' : ''}`}
        />
        {error && <p className="text-red-500">{`${label} is required.`}</p>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
