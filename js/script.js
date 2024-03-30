let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".lg_view");
let nav_items = document.querySelectorAll(".nav_items");

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    nav_items.forEach(element => {
        element.addEventListener("click", () => {
            if (lg_view.classList.contains("show")) {
                lg_view.classList.remove("show");
            }
        });

    });
});