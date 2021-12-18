let requiredElements = document.querySelectorAll("input:required");
for(let Element of requiredElements){
   let Parent = Element.closest('.input_block');
   let label = Parent.querySelector('label');

   label.innerText += "*"; 
}