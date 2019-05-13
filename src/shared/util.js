/**
 * Return the date in "2019-11-25" format
 * @param date
 * @returns {string}
 */
export const formatDate = date => {
    let fullYear = date.getFullYear(),
        month = date.getMonth() + 1,
        dateOfMonth = date.getDate();
    let formattedMonth = month < 10 ? '0' + month : month;
    let formattedDay = dateOfMonth < 10 ? '0' + dateOfMonth : dateOfMonth;
    return fullYear + '-' + formattedMonth + '-' + formattedDay;
};

export const isObjectEmpty = obj => Object.entries(obj).length === 0 || typeof obj === 'undefined';