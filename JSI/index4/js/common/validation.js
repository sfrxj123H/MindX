export const checkEmail = (email) => {
  if (!email || email.length === 0) {
    return "Email is require.";
  }
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.+.[a-zA-Z]{2,4}/gim;
  if (!regex.test(email)) {
    return "Email is invalid.";
  }
  return null;
};

export const checkPassword = (pwd) => {
  if (!pwd || pwd.length === 0) {
    return "Password is require.";
  }
  if (pwd.length < 8 || pwd.length > 16) {
    return "The length of password is from 8 to 16 characters.";
  }
  return null;
};
