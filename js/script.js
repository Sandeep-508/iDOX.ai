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

let accord_items = document.querySelectorAll(".accord_item");
let disp_text = document.querySelector(".disp_text");
let svg = document.querySelector(".svg_icon_box");
let btn_click = document.querySelector(".click_btn");
btn_click.classList.add("line_color");
disp_text.style.display = "block";
svg.classList.remove("accord_flex_prop");

accord_items.forEach(item => {
    let disp_text = item.querySelector(".disp_text");
    let svg = item.querySelector(".svg_icon_box");
    let btn = item.querySelector(".click_btn");
    btn.addEventListener("click", () => {
        accord_items.forEach(element => {
            if (element !== item) {
                let disp_text = element.querySelector(".disp_text");
                let svg = element.querySelector(".svg_icon_box");
                let btn = element.querySelector(".click_btn");
                disp_text.style.display = "none";
                svg.classList.add("accord_flex_prop");
                btn.classList.remove("line_color");
                btn.classList.add("light_white_clr");
            }
        });
        let text_disp = window.getComputedStyle(disp_text).display;
        if (text_disp === "none") {
            disp_text.style.display = "block";
            svg.classList.remove("accord_flex_prop");
            btn.classList.add("line_color");
        } else {
            disp_text.style.display = "none";
            svg.classList.add("accord_flex_prop");
            btn.classList.remove("line_color");
        }
    });
});


let master = document.querySelector(".master");
let slave = document.querySelectorAll(".slave");

master.addEventListener("change", () => {
    slave.forEach(other => {
        other.checked = master.checked;
    });
});