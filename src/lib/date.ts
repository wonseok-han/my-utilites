/**
 * 주어진 날짜와 포맷 문자열을 사용하여 날짜를 지정된 형식으로 변환합니다.
 *
 * - 'YYYY': 4자리 연도
 * - 'YY': 2자리 연도
 * - 'MM': 2자리 월 (01-12)
 * - 'M': 1자리 월 (1-12)
 * - 'DD': 2자리 일 (01-31)
 * - 'D': 1자리 일 (1-31)
 * - 'HH': 2자리 시간 (00-23)
 * - 'mm': 2자리 분 (00-59)
 * - 'm': 1자리 분 (0-59)
 * - 'SS': 2자리 초 (00-59)
 * - 'S': 1자리 초 (0-59)
 *
 * @param {Date} date - 변환할 날짜 객체.
 * @param {string} format - 사용할 날짜 형식 문자열.
 * @returns {string} 지정된 형식으로 변환된 날짜 문자열.
 */
export const getFormatDate = (date: Date, format: string): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return format
    .replace('YYYY', String(year))
    .replace('YY', String(year).slice(-2))
    .replace('MM', ('0' + String(month)).slice(-2))
    .replace('M', String(month))
    .replace('DD', ('0' + String(day)).slice(-2))
    .replace('D', String(day))
    .replace('HH', ('0' + String(hours)).slice(-2))
    .replace('mm', ('0' + String(minutes)).slice(-2))
    .replace('m', String(minutes))
    .replace('SS', ('0' + String(seconds)).slice(-2))
    .replace('S', String(seconds));
};
