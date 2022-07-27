import * as yup from "yup";

export const userschema = yup.object().shape({
  // option: yup.string().required(),
  title: yup.string().required(),
});

export const userschema1 = yup.object().shape({
  option: yup.string().required(),
  country: yup.string().required(),
  email: yup.string().required(),
});


// export const userschema2 = yup.object().shape({
//   title: yup.string().required(),
//   option: yup.string().required(),
//   title1:yup.string().required(),
// });