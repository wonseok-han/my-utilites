export const funcDateStr: Array<FuncStrProps> = [
  {
    id: 1,
    name: 'getDate',
    funcStr: `/**
 * getDate
 * @returns
 * @description 현재 일자룰 'YYYYMMDD' 형태의 문자열로 반환하는 함수.
 */
const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        date.getMonth() < 10
        ? '0' + (date.getMonth() + 1).toString()
        : date.getMonth() + 1;
    const day =
        date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();

    return \`\${year}\${month}\${day}\`;
};`,
  },
];
