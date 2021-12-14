const monthName = new Map<number, string>([
    [1, "JAN"],
    [2, "FEB"],
    [3, "MAR"],
    [4, "APR"],
    [5, "MAY"],
    [6, "JUN"],
    [7, "JUL"],
    [8, "AUG"],
    [9, "SEP"],
    [10, "OCT"],
    [11, "NOV"],
    [12, "DEC"],
]);
export const toDateStr = (dateTime:string):string => {
    const toDate = new Date(dateTime)
    const monthPrefix = monthName.get(toDate.getMonth()+1)
    return `${toDate.getDate()} ${monthPrefix} ${toDate.getFullYear()}`
}