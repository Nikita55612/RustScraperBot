const root = document.documentElement;
const pageContent = document.getElementById("page-content")
let currPage

function setCssVariable(name, value) {
  root.style.setProperty(name, value);
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("page");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        main.style.marginLeft = "220px";
    } else {
        main.style.marginLeft = "0";
    }
}

function setPageContent(element) {
    const target = element.innerHTML;
    if (currPage === target) {
        return
    }
    currPage = target;
    if (target === "Главная") {
        pageContent.innerHTML = mainPage;
    } else if (target === "Обновления") {
        pageContent.innerHTML = updatesPage;
    }
}

function viewDetails() {

}

function switchTheme() {
    const themeSwitcher = document.getElementById("themeSwitcher");
    const themeData = themeSwitcher.getAttribute("theme-data");
    if (themeData === "0") {
        themeSwitcher.setAttribute("theme-data", "1");
        themeSwitcher.innerHTML = `
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                    </svg>
        `
        setCssVariable('--bg', '#FAF7F0');
        setCssVariable('--fg', '#4A4947');
        setCssVariable('--ig', '#705C53');
        setCssVariable('--sbg', '#D8D2C2');
        setCssVariable('--lh', '#B17457');
    } else {
        themeSwitcher.setAttribute("theme-data", "0");
        themeSwitcher.innerHTML = `
                    <svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                    </svg>
        `
        setCssVariable('--bg', '#131516');
        setCssVariable('--fg', '#98a3ad');
        setCssVariable('--ig', '#43484D');
        setCssVariable('--sbg', '#292C2F');
        setCssVariable('--lh', '#3473AD');
    }
}

function downloadExcelTemplate() {
    const data = [
        ['mp', 'id', 'rrp', 'rrcp'],
        ['oz', '1234567890', '1090', '969'],
        ['wb', '1234567890', '1490', '1377'],
        ['oz', '2234567890', '990', null],
        ['wb', '2234567890', '1999', null],
        ['oz', '2334567890', null, null],
        ['wb', '2334567890', null, null],
    ];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Данные');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'template.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('demo-video');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });
    observer.observe(video);
});