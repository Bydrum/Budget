let money = prompt ('Ваш бюджет на месяц?', 'В рублях');
let time = prompt ('Введите дату в формате YYYY-MM-DD');
let inputExpenses1 = prompt('Введите обязательную статью расходов в этом месяце')
let inputExpenses2 = prompt ('Во сколько обойдется?')
const appData = {
    budget: money,
    timeData: time,
    expenses:{
        inputExpenses1: inputExpenses2,
    },
    optionalExpenses:{},
    income:[],
    savings: false
};
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
alert(money / 30)