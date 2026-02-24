export const API_KEY = "AIzaSyDIaRp4KvjQ8mdY_VAjiXv7YGa8T5jJcWg";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
