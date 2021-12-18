let numbersList = document.querySelectorAll("[type = 'email']");
for(let numberElement of numbersList){
    numberElement.addEventListener('blur', numberValidation);
}
function numberValidation(e){
    if (this.validationMessage) {
        if (this.validationMessage === "Please include an '@' in the email address. '"+this.value+"' is missing an '@'.") {
            this.setCustomValidity("لطفا از  '@' در ایمیل استفاده کنید. '"+this.value+"' ایمیل شما درست نیست.");
            this.reportValidity();
        } else if (this.validationMessage === "Please enter a part following '@'. '"+this.value+"' is incomplete.") {
            this.setCustomValidity("بعد از '@' مقداری نیست '"+this.value+"' ناقص است.");
            this.reportValidity();
        }else if (this.validationMessage === "Please match the requested format.") {
            this.setCustomValidity("ایمیل باید با فرمت'*@*.com' مطابقت داشته باشد.");
            this.reportValidity();
        }
    }else{
        this.reportValidity();
    }
}