/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from './data';

/**
 * 주어진 함수를 문자열로 변환하여 반환합니다. 반환된 문자열에는 함수의 이름과 함수의 구현부가 포함됩니다.
 * 만약 주어진 인수가 유효한 함수가 아니라면, 빈 문자열을 반환합니다.
 *
 * @param {(...args: any[]) => any} func - 문자열로 변환할 함수. `null` 또는 `undefined`일 수도 있습니다.
 * @returns {string} 함수의 이름과 구현부를 포함하는 문자열. 유효한 함수가 아닌 경우 빈 문자열.
 * @description 함수를 인수로 받아 함수명과 함수 구현부를 문자열로 반환합니다.
 */
export const getFunctionString = (
  func: (...args: Array<any>) => any | null | undefined
): string => {
  if (isEmpty(func)) return '';

  return `${func?.name} = ${func?.toString()}`;
};

/**
 * 주어진 문자열의 좌측에 특정 문자열을 추가하여 지정된 최대 길이를 만족하는 새 문자열을 반환합니다.
 * 만약 기존 문자열의 길이가 최대 길이보다 크거나 같다면, 원본 문자열을 그대로 반환합니다.
 *
 * @param {string} str - 좌측에 문자열을 붙일 기준 문자열.
 * @param {number} maxLen - 채우고자 하는 최대 길이.
 * @param {string} left - 기준 문자열 좌측에 붙일 문자열.
 * @returns {string} maxLen 길이를 만족하는, left 문자열로 채워진 결과 문자열.
 * @description 임의의 문자열을 인수로 받아 좌측에 지정된 문자열을 채워넣어 지정된 길이의 문자열을 생성합니다.
 */
export const lPad = (str: string, maxLen: number, left: string): string => {
  if (str.length >= maxLen) return str;

  let result = left.repeat(maxLen - str.length);
  result += str;

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};

/**
 * 주어진 문자열의 우측에 특정 문자열을 추가하여 지정된 최대 길이를 만족하는 새 문자열을 반환합니다.
 * 만약 기존 문자열의 길이가 최대 길이보다 크거나 같다면, 원본 문자열을 그대로 반환합니다.
 *
 * @param {string} str - 우측에 문자열을 붙일 기준 문자열.
 * @param {number} maxLen - 채우고자 하는 최대 길이.
 * @param {string} right - 기준 문자열 우측에 붙일 문자열.
 * @returns {string} maxLen 길이를 만족하는, right 문자열로 채워진 결과 문자열.
 * @description 임의의 문자열을 인수로 받아 우측에 지정된 문자열을 채워넣어 지정된 길이의 문자열을 생성합니다.
 */
export const rPad = (str: string, maxLen: number, right: string): string => {
  if (str.length >= maxLen) return str;

  const result = str + right.repeat(maxLen - str.length);

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};

/**
 * 주어진 문자열을 camelCase 형식으로 변환합니다.
 * 이 함수는 문자열 내의 공백이나 특수 문자를 제거하고, 단어의 첫 글자를 대문자로 변환하여 camelCase 형식의 문자열을 생성합니다.
 * 문자열의 첫 글자는 소문자로 변환됩니다.
 *
 * @param {string} str - camelCase로 변환할 문자열.
 * @returns {string} camelCase 형식으로 변환된 문자열.
 * @description 문자열을 camelCase로 변환하는 함수입니다.
 */
export const convertToCamelCase = (str: string): string => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => char.toUpperCase())
    .replace(/(^|\s)\S/g, (char) => char.toLowerCase());
};

/**
 * 주어진 문자열을 kebab-case 형식으로 변환합니다.
 * 이 함수는 문자열 내의 대문자를 소문자로 변환하고, 단어 사이에 하이픈('-')을 삽입합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} kebab-case 형식으로 변환된 문자열.
 * @description 문자열을 kebab-case로 변환하여 반환하는 함수.
 */
export const convertToKebabCase = (str: string): string => {
  return str
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 0 ? '-' + char : char
    )
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '-' + char)
    .toLowerCase()
    .trim();
};

/**
 * 주어진 문자열을 PascalCase 형식으로 변환합니다.
 * 이 함수는 문자열의 각 단어의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} PascalCase 형식으로 변환된 문자열.
 * @description 문자열을 PascalCase로 변환하여 반환하는 함수.
 */
export const convertToPascalCase = (str: string): string => {
  return (' ' + str).replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) =>
    char.toUpperCase()
  );
};

/**
 * 주어진 문자열을 Sentence case 형식으로 변환합니다.
 * 이 함수는 문자열의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} Sentence case 형식으로 변환된 문자열.
 * @description 문자열을 Sentence case로 변환하여 반환하는 함수.
 */
export const convertToSentenceCase = (str: string): string => {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 주어진 문자열을 snake_case 형식으로 변환합니다.
 * 이 함수는 문자열 내의 대문자를 소문자로 변환하고, 단어 사이에 밑줄('_')을 삽입합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} snake_case 형식으로 변환된 문자열.
 * @description 문자열을 snake_case로 변환하여 반환하는 함수.
 */
export const convertToSnakeCase = (str: string): string => {
  return (' ' + str)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '_' + char)
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 1 ? '_' + char : char
    )
    .toLowerCase()
    .substring(1);
};

/**
 * 주어진 문자열을 Title Case 형식으로 변환합니다.
 * 이 함수는 각 단어의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} Title Case 형식으로 변환된 문자열.
 * @description 문자열을 Title Case로 변환하여 반환하는 함수.
 */
export const convertToTitleCase = (str: string): string => {
  return (' ' + str)
    .replace(/[A-Z]/g, (char) => ' ' + char)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => ' ' + char.toUpperCase())
    .trim();
};
