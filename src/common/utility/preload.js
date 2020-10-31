export const preload = (images) => {
  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      const element = images[key];
      let image = new Image();
      image.src = element;
    }
  }
};
