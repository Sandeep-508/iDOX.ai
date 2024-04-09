// for navbar

let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".lg_view");
let nav_items = document.querySelectorAll(".nav_items");
let menu_item_1 = document.querySelector(".first_line");
let menu_item_2 = document.querySelector(".second_line");
let menu_item_3 = document.querySelector(".third_line");

// in the navbar to make the cross

function show() {
    menu_item_2.style.display = "none";
    menu_item_1.classList.add("item_pos");
    menu_item_1.style.transform = "rotate(45deg)";
    menu_item_3.style.transform = "rotate(-45deg)";
}
// we used this function to remove the cross to make it look like normal

function hide() {
    menu_item_2.style.display = "block";
    menu_item_1.classList.remove("item_pos");
    menu_item_1.style.transform = "rotate(0deg)";
    menu_item_3.style.transform = "rotate(0deg)";
}
let body = document.body;


menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        show();
    } else {
        body.style.overflow = "auto";
        hide();
    }
    nav_items.forEach(element => {
        element.addEventListener("click", () => {
            hide();
            if (lg_view.classList.contains("show")) {
                lg_view.classList.remove("show");
            }
            body.style.overflow = "auto";
        });

    });
});

// for accordion

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

// we have used this in the how it works section for the checkbox in the second column

let master = document.querySelector(".master");
let slave = document.querySelectorAll(".slave");

master.addEventListener("change", () => {
    slave.forEach(other => {
        other.checked = master.checked;
    });
});

// this is for the preloader that appears when the page loads  

let preloader = document.querySelector(".preloader");

function toggleOverflow() {
    if (preloader.classList.contains("vanish")) {
        body.style.overflow = "auto";
    } else {
        body.style.overflow = "hidden";
    }
}

body.style.overflow = "hidden";
setTimeout(() => {
    preloader.classList.add("vanish");
    preloader.addEventListener("transitionend", toggleOverflow);
}, 3000);

// we have used for the scroll to top function 

let scroll_to_top = document.querySelector(".scroll_to_top");
let scrollPT = 200;
scroll_to_top.style.display = "none";
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPT) {
        scroll_to_top.style.display = "block";
    } else {
        scroll_to_top.style.display = "none";
    }
});

scroll_to_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});