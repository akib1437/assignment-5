//Get Current balance
const currBalEle = document.getElementById("cur-bal");
let currBal = parseInt (currBalEle.textContent);

//update donation
function upDon(inputId, balId, source)
{
    const inputField =document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if(amount>0 && amount <= currBal)
    {
        currBal -= amount;
        currBalEle.textContent = currBal.toFixed(0);

        const balELe = document.getElementById(balId);
        const currBalVal = parseInt(balELe.textContent);
        balELe.textContent = (currBalVal + amount).toFixed(0);

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

    const donMess = document.createElement("div");
    donMess.classList.add('bg-base-100','shadow-lg', 'p-4', 'rounded', 'mb-4', 'font-bold');
    donMess.textContent = `${amount} Taka is donated for famine-2024 at ${source} on ${date}`;

    transCon.appendChild(donMess);
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
