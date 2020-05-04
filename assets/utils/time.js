import moment from "moment";

export const currentDateAdded = function (add) {
    let d = new Date();
    d.setDate(d.getDate() + add);
    let month = d.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let date = d.getDate();
    if (date < 10) date = `0${date}`;

    return `${date}/${month}/${d.getFullYear()}`
};

export const currentDateTimeAdded = function (add) {
    let d = new Date();
    d.setDate(d.getDate() + add);
    let month = d.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let date = d.getDate();
    if (date < 10) date = `0${date}`;

    return `${d.getHours()}:${d.getMinutes()}, ${date}/${month}/${d.getFullYear()}`
};

export const getDateLocalFormat = function (str) {
    let strArr = str.split("/");
    return `${strArr[1]}/${strArr[0]}/${strArr[2]}`
};

export const getDateTimeLocalFormat = function (str) {
    let strArr = str.split(",");
    let date = strArr[1].trim();
    let time = strArr[0].trim();

    let arrDate = date.split("/");
    return `${time} ${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`
};

export const dateTimeFormat = function (date, format) {
    return moment(Number(date)).format(format);
};

export const formatDateInput = function (input) {
    if (input && input.trim() != '') {
        if (input.includes('/')) {
            let val = input.split("/");
            return `${val[2]}${val[1]}${val[0]}`;
        } else if (input.includes('.')) {
            let val = input.split(".");
            return `${val[2]}${val[1]}${val[0]}`;
        } else if (input.includes('-')) {
            let val = input.split(".");
            return `${val[2]}${val[1]}${val[0]}`;
        } else {
            return input
        }
    } else {
        return input;
    }
}

export const getDateValue = function (input) {
    if (input && input.trim() != '') {
        if (input.includes('/')) {
            let val = input.split("/");
            return `${val[1]}/${val[0]}/${val[2]}`;
        } else if (input.includes('.')) {
            let val = input.split(".");
            return `${val[1]}/${val[0]}/${val[2]}`;
        }
    } else {
        return input;
    }
}