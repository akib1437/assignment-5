//Update Donation
function upDon(inputId, balanceId)
{
    const inputField = document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if (amount>0 && amount<= currentBalance)
    {
        currentBalance -= amount;
        currentBalanceEle.textContent =currentBalance.toFixed(0);

        const balELe = document.getElementById(balanceId);
        const currentBalanceVal = parseInt(balELe.textContent);
        balELe.textContent = (currentBalanceEle + amount).toFixed(0);

        inputField.value ='';
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Button Event Listeners
document.getElementById("noakhali-donate-btn").onclick = function(){
    upDon("noakhali-input-donate", "noakhali-balance");
};
document.getElementById("feni-donate-btn").onclick = function(){
    upDon("ate", "feni-balance");
};
document.getElementById("quota-donate-btn").onclick = function(){
    upDon("quota-input-donate", "quota-balance");
};


function showSectionById(id)
{
    document.getElementById ('donate-form').classList.add('hidden');
    document.getElementById ('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden'); 

}

document.getElementById('btn-show-donate').addEventListener('click', function(){
    showSectionById('donate-form');
})
document.getElementById('btn-show-history').addEventListener('click', function(){
    showSectionById('transaction-section');
})