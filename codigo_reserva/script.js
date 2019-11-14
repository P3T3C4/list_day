const btnAdd = document.querySelector(".btn-add");
const alin = document.querySelector("#alinhamento"); 

btnAdd.addEventListener("click", event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll("form input")];

    fields.forEach(field => {
        if (field.value == "") alin.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");

    if (formError) {
        formError.addEventListener("animationend", (event) => {
            if (event.animationName == "nono") {
                formError.classList.remove("validate-error");
            }
        });
    }
});