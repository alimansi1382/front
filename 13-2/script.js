let input_blockList = document.querySelectorAll(".input_block input");
for (let input_block of input_blockList) {
    input_block.addEventListener("focus",addclass)
    input_block.addEventListener("blur",removeclass)
    input_block.addEventListener("keyup",addclass)
}
function addclass(e) {
        let blockElement = this.closest(".input_block");
        blockElement.classList.add("focus");
}
function removeclass(e) {
    if (this.value == "") {
        let blockElement = this.closest(".input_block");
        blockElement.classList.remove("focus");
    }
}