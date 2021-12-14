import {toDateStr} from "../DateTimeConverter";

describe('DateTime Converter', () => {
    const testTable = [
        {dateTime: "2021-01-13T11:59:58.225179+07:00", expectedVal: "13 JAN 2021"},
        {dateTime: "2021-02-13T11:59:58.225179+07:00", expectedVal: "13 FEB 2021"},
        {dateTime: "2021-03-13T11:59:58.225179+07:00", expectedVal: "13 MAR 2021"},
        {dateTime: "2021-04-13T11:59:58.225179+07:00", expectedVal: "13 APR 2021"},
        {dateTime: "2021-05-13T11:59:58.225179+07:00", expectedVal: "13 MAY 2021"},
        {dateTime: "2021-06-13T11:59:58.225179+07:00", expectedVal: "13 JUN 2021"},
        {dateTime: "2021-07-13T11:59:58.225179+07:00", expectedVal: "13 JUL 2021"},
        {dateTime: "2021-08-13T11:59:58.225179+07:00", expectedVal: "13 AUG 2021"},
        {dateTime: "2021-09-13T11:59:58.225179+07:00", expectedVal: "13 SEP 2021"},
        {dateTime: "2021-10-13T11:59:58.225179+07:00", expectedVal: "13 OCT 2021"},
        {dateTime: "2021-11-13T11:59:58.225179+07:00", expectedVal: "13 NOV 2021"},
        {dateTime: "2021-12-13T11:59:58.225179+07:00", expectedVal: "13 DEC 2021"},
    ]
    testTable.forEach(({dateTime, expectedVal}) => {
        it(`should return ${expectedVal} when input date time ${dateTime}`, () => {
            const result = toDateStr(dateTime)
            expect(result).toEqual(expectedVal)
        });
    });
});