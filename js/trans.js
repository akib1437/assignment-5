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
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Log donation
function logDonation(amount, source)
{
    const transCon = document.getElementById("trans-con");
    const date = new Date().toLocaleString("en-BD", { timezone: "Asia/Dhaka"});

    const donMess = document.createElement("div");
    donMess.classList.add('bg-base-100','shadow-lg', 'p-4', 'rounded', 'mb-4', 'font-bold');
    donMess.textContent = `${amount} Taka is donated for famine-2024 at ${source} on ${date}`;

    transCon.appendChild(donMess);
}

//Button event listeners
document.getElementById("noa-don-btn").onclick = function(){
    upDon("noa-input-don", "noa-bal", "Noakhali");
};
document.getElementById("feni-don-btn").onclick = function(){
    upDon("feni-input-don", "feni-bal", "Feni");
};
document.getElementById("quota-don-btn").onclick = function(){
    upDon("quota-input-don", "quota-bal", "Quota");
};