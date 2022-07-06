import * as yup from "yup";

export const userschema = yup.object().shape({
  option: yup.string().required(),
  // title: yup.string().required(),
});