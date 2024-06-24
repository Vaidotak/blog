document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { name: "Orai", url: "./orai/" },
        { name: "Katalogas2", url: "./katalogas2/" },
        { name: "Katalogas3", url: "./katalogas3/" }
    ];

    const ul = document.getElementById("linkList");

    links.forEach(function(link) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.url;
        li.appendChild(a);
        ul.insertBefore(li, ul.firstChild);
    });
});
