export const errorHandler = ({ status, data }) => {
  switch (status) {
    case 401:
      console.log("401");
      break;
    case 400:
      console.log("400");
      break;
    case 403:
      console.log("403");
      break;
    case 422:
      console.log("422");
      break;
    case 404:
      console.log("404");
      break;
    default:
      console.log("Something went wrong.");
      break;
  }
};

export const handleApi = async (promise) => {
  return promise
    .then((result) => result.data)
    .catch((error) => Promise.resolve(error.response.data));
};