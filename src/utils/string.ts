/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from './data';

/**
 * getFunctionString
 * @param func 문자열로 반환받을 함수
 * @returns
 * @description 함수를 인수로 받아 함수명, 함수 구현부를 문자열로 반환하는 함수.
 */
export const getFunctionString = (func: any | null | undefined): string => {
  if (isEmpty(func)) return '';

  return `${func?.name} = ${func?.toString()}`;
};

/**
 * lPad
 * @param str 좌측에 문자열을 붙일 기준 문자열
 * @param maxLen 채우고자하는 최대 길이
 * @param left 기준 문자열 좌측에 붙일 문자열
 * @returns maxLen길이의 left + str 문자열
 * @description 임의의 문자열을 인수로 받아 좌측에 문자열을 채우는 함수.
 */
export const lPad = (str: string, maxLen: number, left: string): string => {
  if (str.length >= maxLen) return str;

  let result = left;
  for (let i = 1; i < maxLen - str.length; ++i) {
    result += left;
  }

  result += str;

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};

/**
 * rPad
 * @param str 우측에 문자열을 붙일 기준 문자열
 * @param maxLen 채우고자하는 최대 길이
 * @param right 기준 문자열 우측에 붙일 문자열
 * @returns maxLen길이의 str + right 문자열
 * @description 임의의 문자열을 인수로 받아 우측에 문자열을 채우는 함수.
 */
export const rPad = (str: string, maxLen: number, right: string): string => {
  if (str.length >= maxLen) return str;

  let result = str;
  for (let i = 0; i < maxLen; ++i) {
    result += right;
  }

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};

/**
 * convertToCamelCase
 * @param str 변환할 문자열
 * @returns camelCase로 변환된 문자열
 * @description 문자열을 camelCase로 변환하는 함수.
 */
export const convertToCamelCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => char.toUpperCase())
    .replace(/(^|\s)\S/g, (char) => char.toLowerCase());
};

/**
 * convertToKebabCase
 * @param str 변환할 문자열
 * @returns kebab-case로 변환된 문자열
 * @description 문자열을 kebab-case로 변환하는 함수.
 */
export const convertToKebabCase = (str: string) => {
  return str
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 0 ? '-' + char : char
    )
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '-' + char)
    .toLowerCase()
    .trim();
};

/**
 * convertToPascalCase
 * @param str 변환할 문자열
 * @returns PascalCase로 변환된 문자열
 * @description 문자열을 PascalCase로 변환하는 함수.
 */
export const convertToPascalCase = (str: string) => {
  return (' ' + str).replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) =>
    char.toUpperCase()
  );
};

/**
 * convertToSentenceCase
 * @param str 변환할 문자열
 * @returns Sentence case로 변환된 문자열
 * @description 문자열을 Sentence case로 변환하는 함수.
 */
export const convertToSentenceCase = (str: string) => {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};

/**
 * convertToSnakeCase
 * @param str 변환할 문자열
 * @returns snake_case로 변환된 문자열
 * @description 문자열을 snake_case로 변환하는 함수.
 */
export const convertToSnakeCase = (str: string) => {
  return (' ' + str)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '_' + char)
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 1 ? '_' + char : char
    )
    .toLowerCase()
    .substring(1);
};

/**
 * convertToTitleCase
 * @param str 변환할 문자열
 * @returns Title Case로 변환된 문자열
 * @description 문자열을 Title Case로 변환하는 함수.
 */
export const convertToTitleCase = (str: string) => {
  return (' ' + str)
    .replace(/[A-Z]/g, (char) => ' ' + char)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => ' ' + char.toUpperCase())
    .trim();
};
