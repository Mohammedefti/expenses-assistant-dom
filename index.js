// get value function
function getInputValueById(id){
    // const value =parseFloat(document.getElementById(id).value);
    // return;
    // uprer duita line ak sathe likha jai
    return parseFloat(document.getElementById(id).value);
}


// function show error
function showError(id){
    document.getElementById(id).classList.remove("hidden");
}

// function format currency
function formateCurrency(amount){
    return `${amount.toFixed(2)}`;
}

// history er jonno function
function addHistory(income, totalExpenses,balance){
    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'

    historyItem.innerHTML=`

    <p class="text-sx text-gray-500">Serial: ${count}</p>
    <p class="text-sx text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-sx text-gray-500">Income: ${formateCurrency(income)}</p>
    <p class="text-sx text-gray-500">Expenses: ${formateCurrency (totalExpenses)}</p>
    <p class="text-sx text-gray-500">Balance: ${formateCurrency(balance)}</p>
    `;

    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)
};


// getting all the value

let count = 0;
    
// add event listener for calculate button
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', function(){
    count+=1;
    // get value without function
    // const income = parseFloat(document.getElementById("income").value);   
    // const software = parseFloat(document.getElementById("software").value);
    // const courses = parseFloat(document.getElementById("courses").value);
    // const internet = parseFloat(document.getElementById("internet").value);

    // get value with function
const income = getInputValueById('income');
const software = getInputValueById('software');
const courses = getInputValueById('courses');
const internet = getInputValueById('internet');
    
    if (income <=0 || isNaN(income)) {
        // document.getElementById('income-error').classList.remove('hidden');
        showError('income-error');
        return;
    }
    if (software <=0 || isNaN(software)) {
        // document.getElementById('software-error').classList.remove('hidden');
        showError('software-error');
        return;
    }
    if (courses <=0 || isNaN(courses)) {
        // document.getElementById('courses-error').classList.remove('hidden');
        showError('courses-error');
        return;
    }
    if (internet <=0 || isNaN(internet)) {
        // document.getElementById('internet-error').classList.remove('hidden');
        showError('internet-error');
        return;
    }

    const totalExpenses = software+courses+internet;
    const balance = income - totalExpenses;

    if (totalExpenses>income) {
        // document.getElementById('logic-error').classList.remove('hidden');
        showError('logic-error');
        // return dewa hoi jate ei error ta dhora kahile programme ar samne na jai.
        return;
    }

    const totalExpensesElement  = document.getElementById ("total-expenses");
    totalExpensesElement.innerText=totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText =balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');


    // expense history last box;
//     const historyItem = document.createElement("div");
//     historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'

//     historyItem.innerHTML=`

//     <p class="text-sx text-gray-500">Serial: ${count}</p>
//     <p class="text-sx text-gray-500">${new Date().toLocaleDateString()}</p>
//     <p class="text-sx text-gray-500">Income: ${formateCurrency(income)}</p>
//     <p class="text-sx text-gray-500">Expenses: ${formateCurrency (totalExpenses)}</p>
//     <p class="text-sx text-gray-500">Balance: ${formateCurrency(balance)}</p>
//     `;

//     const historyContainer = document.getElementById("history-list");
//     historyContainer.insertBefore(historyItem,historyContainer.firstChild)
addHistory(income, totalExpenses,balance);
});


// add event listener for savings button
const calculateSavingsButton = document.getElementById("calculate-savings");
calculateSavingsButton.addEventListener("click",function(){
    // without function
    // const income = parseFloat(document.getElementById("income").value);
    // const software = parseFloat(document.getElementById("software").value);
    // const courses = parseFloat(document.getElementById("courses").value);
    // const internet = parseFloat(document.getElementById("internet").value);
    // const savingPercentage = parseFloat(document.getElementById('savings').value);

    // with function
    const income = getInputValueById('income');
const software = getInputValueById('software');
const courses = getInputValueById('courses');
const internet = getInputValueById('internet');
const savingPercentage = getInputValueById('savings');


    if (savingPercentage <=0 || isNaN(savingPercentage)) {
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }
    // console.log(savingPercentage);
    const totalExpenses = software+courses+internet;
    const balance = income - totalExpenses;

    const savingsAmount = (savingPercentage*balance)/100;
    console.log(savingsAmount);

    const remainingBalance = balance - savingsAmount;
    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText=formateCurrency(savingsAmount);

    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText=formateCurrency(remainingBalance);

})


// history tab functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener("click", function(){

    historyTab.classList.add("text-white","bg-gradient-to-r", "from-blue-500", "to-purple-600");
// jokhon history tab e click korbo tokhon to assistant tab inactive thakbe tai oi tab theke class gula remove kori disi.
    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove("text-white",
        "bg-gradient-to-r",
         "from-blue-500", 
         "to-purple-600");
    assistantTab.classList.add("text-gray-600");

    // jai calculation er part ase oita to amra chai na tai oita remove korte hobe.
    // const removeSection = document.getElementById('expense-form');
    // removeSection.classList.add("hidden");
    // const showResult = document.getElementById("results");
    // showResult.classList.remove("hidden");
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

});


// assistant tab add eventn listener

assistantTab.addEventListener('click',function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

});


// live validation for input field
document.getElementById('income').addEventListener('input',function(){
    // const inputValue =parseFloat(document.getElementById('income').value);
  const inputValue =   getInputValueById('income');

    if (isNaN(inputValue) || inputValue<= 0) {
        document.getElementById('income-error').classList.remove('hidden');
        return; 
    }
});
