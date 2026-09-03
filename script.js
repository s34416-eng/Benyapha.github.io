function openPage(pageId, button) {

    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    // แสดงหน้าที่เลือก
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    // เปลี่ยนปุ่มเมนูที่ active
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {

        item.classList.remove("active");

    });


    button.classList.add("active");


    // กลับขึ้นไปด้านบน
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
