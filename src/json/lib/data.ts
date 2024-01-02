export const funcDataStr: Array<FuncStrProps> = [
  {
    id: 1,
    name: 'isEmpty',
    funcJavascriptStr: `
/**
 * 주어진 값이 \`null\`, \`undefined\`, 또는 빈 문자열(\`''\`)인지 여부를 확인합니다.
 * 이 함수는 다양한 타입의 값(배열, 객체, 숫자, 문자열, 알 수 없는 타입)을 받아들일 수 있습니다.
 *
 * @param {Array<unknown> | Record<string, unknown> | number | string | unknown | null | undefined} value - 검사할 값.
 * @returns {boolean} 값이 \`null\`, \`undefined\`, 또는 빈 문자열인 경우 \`true\`, 그렇지 않으면 \`false\`.
 */
export const isEmpty = (value) => {
  return value === null || value === undefined || value === '';
};
    `,
    funcTypescriptStr: `
/**
 * 주어진 값이 \`null\`, \`undefined\`, 또는 빈 문자열(\`''\`)인지 여부를 확인합니다.
 * 이 함수는 다양한 타입의 값(배열, 객체, 숫자, 문자열, 알 수 없는 타입)을 받아들일 수 있습니다.
 *
 * @param {Array<unknown> | Record<string, unknown> | number | string | unknown | null | undefined} value - 검사할 값.
 * @returns {boolean} 값이 \`null\`, \`undefined\`, 또는 빈 문자열인 경우 \`true\`, 그렇지 않으면 \`false\`.
 */
export const isEmpty = (
  value:
    | Array<unknown>
    | Record<string, unknown>
    | number
    | string
    | unknown
    | null
    | undefined
): boolean => {
  return value === null || value === undefined || value === '';
};
    `,
  },
];
