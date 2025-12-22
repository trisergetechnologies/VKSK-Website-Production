"use client";

import { Input, Textarea, Typography } from "@material-tailwind/react";

type BaseProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  required?: boolean;
};

type InputProps = BaseProps & {
  type?: string;
};

export function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Typography className="text-sm font-medium text-gray-700">
        {label}
      </Typography>

      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="!border-gray-300 focus:!border-primary"
      />
    </div>
  );
}

export function FormTextarea({
  label,
  name,
  value,
  onChange,
  required,
}: BaseProps & { rows?: number }) {
  return (
    <div className="flex flex-col gap-1">
      <Typography className="text-sm font-medium text-gray-700">
        {label}
      </Typography>

      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={6}
        placeholder=" "
        className="!border-gray-300 focus:!border-primary"
      />
    </div>
  );
}
