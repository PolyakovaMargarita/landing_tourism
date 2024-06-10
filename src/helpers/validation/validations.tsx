import * as Yup from "yup";
import {
  emailInvalid,
  isRequired,
  isRequiredStars,
  maxCharacters,
  maxMoreCharacters,
  minCharacters,
  nicknameInvalid,
  passwordConfirm,
  passwordMinCharacters,
  passwordMustMatch,
  phoneInvalid,
  starInvalid,
} from "./constants";
import { nicknameRegExp, phoneRegExp, starRegExp } from "./reg";

export const nicknameValidation = Yup.string()
  .matches(nicknameRegExp, nicknameInvalid)
  .min(3, minCharacters)
  .max(20, maxCharacters)
  .required(isRequired);

export const phoneNumberValidation = Yup.string()
  .matches(phoneRegExp, phoneInvalid)
  .required(isRequired);

export const emailValidation = Yup.string()
  .email(emailInvalid)
  .required(isRequired);

export const textValidation = Yup.string()
  .required(isRequired)
  .min(3, minCharacters)
  .max(1000, maxMoreCharacters);

export const starValidation = Yup.string()
  .required(isRequiredStars)
  .matches(starRegExp, starInvalid);

export const requiredValidation = Yup.string().required(isRequired);

export const passwordValidation = Yup.string()
  .min(6, passwordMinCharacters)
  .required(isRequired);

export const passwordConfirmValidation = Yup.string()
  .oneOf([Yup.ref("password"), undefined], passwordMustMatch)
  .required(passwordConfirm);
