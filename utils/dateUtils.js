const formatDate = (dateObj) => {
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    return `${padTo2Digits(date)}/${padTo2Digits(month)}/${year}, ${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};

const padTo2Digits = (number) => {
    return number.toString().padStart(2, '0');
};

const daysBetweenDates = (startDate, endDate) => {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((endDate - startDate) / msPerDay);
};

module.exports = {
    formatDate,
    daysBetweenDates
};
