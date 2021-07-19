const pwRule = [/[0-9]/, /[a-zA-Z]/, /[~!@$%<>^&*]/];

export const checkPassword = (pw, repw) => {
  if (!pwRule[0].test(pw) || !pwRule[1].test(pw) || !pwRule[2].test(pw))
    return 'INVALID PASSWORD';
  if (pw !== repw) return 'PASSWORD MISMATCH';
  if (pw.length < 6) return 'SHORT PASSWORD';
  return;
};
