/**
 * Formatea una fecha en un formato más legible para el usuario.
 * @param {Date} dateObj - Objeto de fecha a formatear.
 * @return {string} Fecha formateada en formato "DD/MM/YYYY, HH:MM:SS".
 */
const formatDate = (dateObj) => {
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Los meses en JavaScript comienzan en 0
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    return `${padTo2Digits(date)}/${padTo2Digits(month)}/${year}, ${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};

/**
 * Añade un cero al principio si el número es menor que 10.
 * @param {number} number - Número a formatear.
 * @return {string} Número formateado con dos dígitos.
 */
const padTo2Digits = (number) => {
    return number.toString().padStart(2, '0');
};

/**
 * Calcula la diferencia de tiempo en días entre dos fechas.
 * @param {Date} startDate - Fecha de inicio.
 * @param {Date} endDate - Fecha de finalización.
 * @return {number} Diferencia en días entre las dos fechas.
 */
const daysBetweenDates = (startDate, endDate) => {
    const msPerDay = 24 * 60 * 60 * 1000; // Milisegundos por día
    return Math.round((endDate - startDate) / msPerDay);
};

module.exports = {
    formatDate,
    daysBetweenDates
};
