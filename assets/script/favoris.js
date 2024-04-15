let inputs = document.querySelectorAll("input:has(+div.like)")


inputs.forEach(input => {
    console.log('cookie');
    input.addEventListener("click" ,  () => {
        if (input.checked) {
            console.log("coco");
        }

        else {
            console.log("cookie");
        }
        })
})



