
export const numberFormat = function (number, fixLength = 0) {
    if (fixLength == null) {
        let stringNum = number + '';
        let arrInc = stringNum.split('.');
        let fixNum = 0;
        if (arrInc.length == 2) {
            fixNum = arrInc[1].length;
        }

        fixNum = fixNum > 3 ? 3 : fixNum;

        return (Number(number)).toLocaleString('en-US', { minimumFractionDigits: fixNum });
    } else {
        return (Number(number)).toLocaleString('en-US', { minimumFractionDigits: fixLength });
    }
}
