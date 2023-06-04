const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(" #menu-btn");
const closeBtn = document.querySelector("#close-Btn");
const themeToggle = document.querySelector(".theme-toggle");
console.log(sideMenu, menuBtn, closeBtn);
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = ("block");
});
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variable");
    themeToggle.querySelector("span:nth-child(1)").classList.toggle('active')
    themeToggle.querySelector("span:nth-child(2)").classList.toggle('active')
});
orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td> 
    <td>${order.productNumber}</td>
     <td>${order.paymentStatus}</td> <td
     td  class="${
       order.shipping === "Declined"
         ? "danger"
         : order.shipping === "Pending"
         ? "primary"
         : "primary"
     }">${order.shipping}</td> <td class='primary'>Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr)
});