import { checkSpace, checkEmailType, checkSpecial, checkPasswordConfirm } from "./utils";

it("ID에 공백이 있는지 확인한다.", () => {
  const result = checkSpace('rl atasdr020@naver.com');
  expect(result).toBeFalsy();
})

it("Email 형식에 맞는지 확인한다.", () => {
  const result = checkEmailType('rlatasdr020');
  expect(result).toBeFalsy();
})

it("비밀번호에 특수문자 2개이상 포함됐는지 확인한다..", () => {
  const result = checkSpecial('rlatasdr020');
  expect(result).toBeFalsy();
})

it("비밀번호와 비밀번호확인이 같은지 확인한다.", () => {
  const result = checkPasswordConfirm('1234!!','1234@@');
  expect(result).toBeFalsy();
})
