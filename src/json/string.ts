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
  {
    id: 3,
    name: 'convertToCamelCase',
    funcStr: `/**
 * convertToCamelCase
 * @param str 변환할 문자열
 * @returns camelCase로 변환된 문자열
 * @description 문자열을 camelCase로 변환하는 함수.
 */
const convertToCamelCase = (str) => {
    return str
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => char.toUpperCase())
      .replace(/(^|\\s)\\S/g, (char) => char.toLowerCase());
};`,
  },
  {
    id: 4,
    name: 'convertToKebabCase',
    funcStr: `/**
 * convertToKebabCase
 * @param str 변환할 문자열
 * @returns kebab-case로 변환된 문자열
 * @description 문자열을 kebab-case로 변환하는 함수.
 */
const convertToKebabCase = (str) => {
    return str
      .replace(/[A-Z]/g, (char, index) =>
        index !== 0 ? '-' + char : char
      )
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => '-' + char)
      .toLowerCase()
      .trim();
};`,
  },
  {
    id: 5,
    name: 'convertToPascalCase',
    funcStr: `/**
 * convertToPascalCase
 * @param str 변환할 문자열
 * @returns PascalCase로 변환된 문자열
 * @description 문자열을 PascalCase로 변환하는 함수.
 */
const convertToPascalCase = (str) => {
    return (' ' + str).replace(/[^a-zA-Z0-9]+(.)/g, (m, char) =>
      char.toUpperCase()
    );
};`,
  },
  {
    id: 6,
    name: 'convertToSentenceCase',
    funcStr: `/**
 * convertToSentenceCase
 * @param str 변환할 문자열
 * @returns Sentence case로 변환된 문자열
 * @description 문자열을 Sentence case로 변환하는 함수.
 */
const convertToSentenceCase = (str) => {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};`,
  },
  {
    id: 7,
    name: 'convertToSnakeCase',
    funcStr: `/**
 * convertToSnakeCase
 * @param str 변환할 문자열
 * @returns snake_case로 변환된 문자열
 * @description 문자열을 snake_case로 변환하는 함수.
 */
const convertToSnakeCase = (str) => {
    return (' ' + str)
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => '_' + char)
      .replace(/[A-Z]/g, (char, index) =>
        index !== 1 ? '_' + char : char
      )
      .toLowerCase()
      .substring(1);
};`,
  },
  {
    id: 8,
    name: 'convertToTitleCase',
    funcStr: `/**
 * convertToTitleCase
 * @param str 변환할 문자열
 * @returns Title Case로 변환된 문자열
 * @description 문자열을 Title Case로 변환하는 함수.
 */
const convertToTitleCase = (str) => {
    return (' ' + str)
      .replace(/[A-Z]/g, (char) => ' ' + char)
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, char) => ' ' + char.toUpperCase())
      .trim();
};`,
  },
];
