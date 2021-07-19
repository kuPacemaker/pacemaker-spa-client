export const Logger = (msg) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(msg);
  }
};
