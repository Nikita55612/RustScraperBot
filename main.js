

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("page");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        main.style.marginLeft = "250px";
    } else {
        main.style.marginLeft = "0";
    }
}