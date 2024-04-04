export const getImage = (id: string): string => {
  return `${import.meta.env.VITE_APP_IMAGE_URI}/${id}.png`;
};
