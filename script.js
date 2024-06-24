document.addEventListener("DOMContentLoaded", function() {
    const links = [
        { name: "Orai", url: "./orai/" },
        { name: "Orai folder", url: "https://github.com/Vaidotak/blog/tree/30987f71ddcf4acc9f72c408dce5b9827d455afe/orai" },
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
