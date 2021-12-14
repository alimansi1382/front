let numbersList = document.querySelectorAll("[type = 'number']");
for(let numberElement of numbersList){
    numberElement.addEventListener('blur', numberValidation);
}
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function numberValidation(e){
    console.log("min"+this.min+"  max"+this.max+"  Step"+this.step+"  value"+this.value);
    if (Number.isInteger(this.value)) {
        this.setCustomValidity(" مقدار این المان باید عدد باشد ");
        this.reportValidity();
    }else if (isFloat(Number(this.value) / Number(this.step))) {
        this.setCustomValidity(" مقدار این المان باید مضرب از "+ this.step +" باشد");
        this.reportValidity();
    }else if (Number(this.value) > Number(this.max)) {
        this.setCustomValidity(" حداکثر مقدار مجاز برای این المان "+ this.max +" است");
        this.reportValidity();
    }else if (Number(this.value) < Number(this.min)) {
        this.setCustomValidity("حداقل مقدار مجاز برای این المان "+ this.min +" است");
        this.reportValidity();
    }
    
}