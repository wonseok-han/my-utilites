export const funcStringStr: Array<FuncStrProps> = [
  {
    id: 1,
    name: 'lPad',
    funcStr: `
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
export const lPad = (str, maxLen, left) => {
  if (str.length >= maxLen) return str;

  let result = left.repeat(maxLen - str.length);
  result += str;

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};
    `,
  },
  {
    id: 2,
    name: 'rPad',
    funcStr: `
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
export const rPad = (str, maxLen, right) => {
  if (str.length >= maxLen) return str;

  const result = str + right.repeat(maxLen - str.length);

  return result.length >= maxLen ? result.substring(0, maxLen) : result;
};
    `,
  },
  {
    id: 3,
    name: 'convertToCamelCase',
    funcStr: `
/**
 * 주어진 문자열을 camelCase 형식으로 변환합니다.
 * 이 함수는 문자열 내의 공백이나 특수 문자를 제거하고, 단어의 첫 글자를 대문자로 변환하여 camelCase 형식의 문자열을 생성합니다.
 * 문자열의 첫 글자는 소문자로 변환됩니다.
 *
 * @param {string} str - camelCase로 변환할 문자열.
 * @returns {string} camelCase 형식으로 변환된 문자열.
 * @description 문자열을 camelCase로 변환하는 함수입니다.
 */
export const convertToCamelCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => char.toUpperCase())
    .replace(/(^|\\s)\\S/g, (char) => char.toLowerCase());
};
    `,
  },
  {
    id: 4,
    name: 'convertToKebabCase',
    funcStr: `
/**
 * 주어진 문자열을 kebab-case 형식으로 변환합니다.
 * 이 함수는 문자열 내의 대문자를 소문자로 변환하고, 단어 사이에 하이픈('-')을 삽입합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} kebab-case 형식으로 변환된 문자열.
 * @description 문자열을 kebab-case로 변환하여 반환하는 함수.
 */
export const convertToKebabCase = (str) => {
  return str
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 0 ? '-' + char : char
    )
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '-' + char)
    .toLowerCase()
    .trim();
};
    `,
  },
  {
    id: 5,
    name: 'convertToPascalCase',
    funcStr: `
/**
 * 주어진 문자열을 PascalCase 형식으로 변환합니다.
 * 이 함수는 문자열의 각 단어의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} PascalCase 형식으로 변환된 문자열.
 * @description 문자열을 PascalCase로 변환하여 반환하는 함수.
 */
export const convertToPascalCase = (str) => {
  return (' ' + str).replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) =>
    char.toUpperCase()
  );
};
    `,
  },
  {
    id: 6,
    name: 'convertToSentenceCase',
    funcStr: `
/**
 * 주어진 문자열을 Sentence case 형식으로 변환합니다.
 * 이 함수는 문자열의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} Sentence case 형식으로 변환된 문자열.
 * @description 문자열을 Sentence case로 변환하여 반환하는 함수.
 */
export const convertToSentenceCase = (str) => {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};
    `,
  },
  {
    id: 7,
    name: 'convertToSnakeCase',
    funcStr: `
/**
 * 주어진 문자열을 snake_case 형식으로 변환합니다.
 * 이 함수는 문자열 내의 대문자를 소문자로 변환하고, 단어 사이에 밑줄('_')을 삽입합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} snake_case 형식으로 변환된 문자열.
 * @description 문자열을 snake_case로 변환하여 반환하는 함수.
 */
export const convertToSnakeCase = (str) => {
  return (' ' + str)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => '_' + char)
    .replace(/[A-Z]/g, (char: string, index: number) =>
      index !== 1 ? '_' + char : char
    )
    .toLowerCase()
    .substring(1);
};
    `,
  },
  {
    id: 8,
    name: 'convertToTitleCase',
    funcStr: `
/**
 * 주어진 문자열을 Title Case 형식으로 변환합니다.
 * 이 함수는 각 단어의 첫 글자를 대문자로 변환하고, 나머지 글자들은 소문자로 유지합니다.
 *
 * @param {string} str - 변환할 문자열.
 * @returns {string} Title Case 형식으로 변환된 문자열.
 * @description 문자열을 Title Case로 변환하여 반환하는 함수.
 */
export const convertToTitleCase = (str) => {
  return (' ' + str)
    .replace(/[A-Z]/g, (char) => ' ' + char)
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, char: string) => ' ' + char.toUpperCase())
    .trim();
};
    `,
  },
];
