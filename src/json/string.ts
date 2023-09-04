export const funcStringStr: Array<FuncStrProps> = [
  {
    id: 1,
    name: 'lPad',
    funcStr: `/**
 * lPad
 * @param str 좌측에 문자열을 붙일 기준 문자열
 * @param maxLen 채우고자하는 최대 길이
 * @param left 기준 문자열 좌측에 붙일 문자열
 * @returns maxLen길이의 left + str 문자열
 * @description 임의의 문자열을 인수로 받아 좌측에 문자열을 채우는 함수.
 */
const lPad = (str, maxLen, left) => {
    if (str.length >= maxLen) return str;
  
    let result = left;
    for (let i = 1; i < maxLen - str.length; ++i) {
      result += left;
    }
  
    result += str;
  
    return result.length >= maxLen ? result.substring(0, maxLen) : result;
};`,
  },
  {
    id: 2,
    name: 'rPad',
    funcStr: `/**
 * rPad
 * @param str 우측에 문자열을 붙일 기준 문자열
 * @param maxLen 채우고자하는 최대 길이
 * @param right 기준 문자열 우측에 붙일 문자열
 * @returns maxLen길이의 str + right 문자열
 * @description 임의의 문자열을 인수로 받아 우측에 문자열을 채우는 함수.
 */
const rPad = (str, maxLen, right) => {
    if (str.length >= maxLen) return str;

    let result = str;
    for (let i = 0; i < maxLen; ++i) {
      result += right;
    }

    return result.length >= maxLen ? result.substring(0, maxLen) : result;
};`,
  },
];
