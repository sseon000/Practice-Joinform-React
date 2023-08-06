export function checkSpace(id: string) {
  let check = true;

  if (id.search(/\s/) !== -1) {
    check = false;
  }

  return check;
}

export function checkEmailType(id: string) {
  let check = true;
  const regExEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (!regExEmail.test(id)) {
    check = false;
  }

  return check;
}

export function checkSpecial(password: string) {
  let check = true;
  const regExpSpecial = /[~!@#$%^*()_+|?:{}]{2,}/

  if(!regExpSpecial.test(password)) {
    check = false;
  }

  return check;
}

export function checkPasswordConfirm(password: string, passwordCheck: string) {
  let check = true;

  if(password !== passwordCheck) {
    check = false;
  }

  return check;
}