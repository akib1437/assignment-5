//Update Donation
function upDon(inputId, balId)
{
    const inputField = document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if (amount>0 && amount<= currBal)
    {
        currBal -= amount;
        currBalEle.textContent =currBal.toFixed(0);

        const balELe = document.getElementById(balId);
        const currBalVal = parseInt(balELe.textContent);
        balELe.textContent = (currBalEle + amount).toFixed(0);

        inputField.value ='';
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Button Event Listeners
document.getElementById("noa-don-btn").onclick = function(){
    upDon("noa-input-don", "noa-bal");
};
document.getElementById("feni-don-btn").onclick = function(){
    upDon("feni-input-don", "feni-bal");
};
document.getElementById("quota-don-btn").onclick = function(){
    upDon("quota-input-don", "quota-bal");
};


function showSectionById(id)
{
    document.getElementById ('don-form').classList.add('hidden');
    document.getElementById ('trans-sec').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden'); 

}

document.getElementById('btn-show-don').addEventListener('click', function(){
    showSectionById('don-form');
})
document.getElementById('btn-show-his').addEventListener('click', function(){
    showSectionById('trans-sec');
})