/* eslint-disable @typescript-eslint/ban-types */

/**
 * isEmpty
 * @param value all type value
 * @returns
 * @description 인수를 받아 null, undefined, '' 여부를 체크.
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
) => {
  return value === null || value === undefined || value === '';
};
