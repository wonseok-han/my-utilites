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
