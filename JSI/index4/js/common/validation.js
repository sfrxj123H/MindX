export const checkEmail = (email) => {
  if (!email || email.length === 0) {
    return "Email is required.";
  }
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (!regex.test(email)) {
    return "Email is invalid.";
  }
  return null;
};

export const checkPassword = (pwd) => {
  if (!pwd || pwd.length === 0) {
    return "Password is required.";
  }
  if (pwd.length < 8 || pwd.length > 16) {
    return "The valid length of password is from 8 to 16 characters.";
  }
  return null;
};

export const checkPasswordRegister = (pwd1, pwd2) => {
    if (pwd1 !== pwd2) {
      return "Passwords doesn't match.";
    }
    return null;
  };