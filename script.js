/**
  Custom Script File
*/

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const selectYear = document.querySelector('#year');
const selectMonth = document.querySelector('#month');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthAndYear = document.querySelector('#monthAndYear');
monthAndYear.innerHTML = currentMonth + 1 + " / " + currentYear; //start month from 1 - 12
