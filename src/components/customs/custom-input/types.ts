import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";
import {PatternState} from "@/lib/inputPatterns";
import {ChangeEvent} from "react";

export interface CustomInputProps<T extends FieldValues> {
  type?: string;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldError | undefined;
  minLength?: number;
  maxLength?: number;
  pattern?: PatternState;
}

interface Option {
  message: string;
  value: number;
}

export interface RegisterOptions {
  minLength?: number | Option;
  maxLength?: number | Option
  pattern?: PatternState;
  required?: false | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
