const input = document.querySelector("input[type='datetime-local']");
const now = new Date();
console.log(now.getTime());
// input.value = localDateTime;

const textarea = document.getElementById("message");
textarea.addEventListener("input", function () {
    const style = getComputedStyle(textarea);
    textarea.style.height = "auto";
    textarea.style.height =
        Math.min(
            textarea.scrollHeight,
            style.maxHeight.replace("px", "") *
                parseFloat(getComputedStyle(textarea).fontSize),
        ) + "px";
});
