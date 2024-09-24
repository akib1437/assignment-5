//Get Current balance
const currentBalanceEle = document.getElementById("current-balance");
let currentBalance = parseInt (currentBalanceEle.textContent);

//update donation
function upDon(inputId, balanceId, source)
{
    const inputField =document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if(amount>0 && amount <= currentBalance)
    {
        currentBalance -= amount;
        currentBalanceEle.textContent = currentBalance.toFixed(0);

        const balELe = document.getElementById(balanceId);
        const currentBalanceVal = parseInt(balELe.textContent);
        balELe.textContent = (currentBalanceVal + amount).toFixed(0);

        logDonation(amount, source);

        inputField.value ='';

         // Show modal after successful donation
         showModal(amount, source);
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Log donation
function logDonation(amount, source)
{
    const transCon = document.getElementById("transaction-con");
    const date = new Date().toLocaleString("en-BD", { timezone: "Asia/Dhaka"});

    const donateMessage = document.createElement("div");
    donateMessage.classList.add('bg-base-100','shadow-lg', 'p-4', 'rounded', 'mb-4', 'font-bold');
    donateMessage.textContent = `${amount} Taka is donated for famine-2024 at ${source} on ${date}`;

    transCon.appendChild(donateMessage);
}

//Button event listeners
document.getElementById("noakhali-donate-btn").onclick = function(){
    upDon("noakhali-input-donate", "noakhali-balance", "Noakhali");
};
document.getElementById("feni-donate-btn").onclick = function(){
    upDon("feni-input-donate", "feni-balance", "Feni");
};
document.getElementById("quota-donate-btn").onclick = function(){
    upDon("quota-input-donate", "quota-balance", "Quota");
};

// ------------------------------------------


const modal = document.getElementById('donate-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const donationAmountMessage = document.getElementById('don-amount-message');

function showModal(amount, source) {
    
    donationAmountMessage.innerHTML = `
        <p>You have donated <span class="font-bold text-green-600">${amount} Taka</span> to the <span class="font-bold">${source}</span> cause!</p>
    `;
    modal.classList.remove('hidden'); // Show the modal
}

// Close modal on button click
closeModalBtn.onclick = function() {
    modal.classList.add('hidden');
}
