export const isEmail = (email) => {
  const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,6})+$/;
  if (!regex.test(email)) return false;
  else return true;
};
