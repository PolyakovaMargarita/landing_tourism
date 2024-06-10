import * as Yup from "yup";
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  phoneNumberValidation,
  requiredValidation,
  starValidation,
  textValidation,
} from "./validations";

export const loginValidationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const forgotValidationSchema = Yup.object().shape({
  email: emailValidation,
});

export const textValidationSchema = Yup.object().shape({
  text: textValidation,
});

export const addCarValidationSchema = Yup.object().shape({
  year: requiredValidation,
  cargoCapacity: requiredValidation,
  carType: requiredValidation,
  carClass: requiredValidation,
  seats: requiredValidation,
  price: requiredValidation,
});

export const registerValidationSchema = Yup.object().shape({
  nickname: nicknameValidation,
  phoneNumber: phoneNumberValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: passwordValidation,
});

export const reviewsAddValidationSchema = Yup.object().shape({
  name: nicknameValidation,
  comment: textValidation,
  rating: starValidation,
});

export const createOrderValidationSchema = Yup.object().shape({
  email: emailValidation,
  phoneNumber: phoneNumberValidation,
  date: requiredValidation,
  orderMessage: textValidation,
  luggage: requiredValidation,
  seats: requiredValidation
});