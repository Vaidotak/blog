document.addEventListener("DOMContentLoaded", function() {
    const directoryList = [
        // Pavyzdžiui, katalogų pavadinimai
        "Katalogas1",
        "Katalogas2",
        "Katalogas3"
    ];

    const ul = document.getElementById("directoryList");

    directoryList.forEach(function(directory) {
        const li = document.createElement("li");
        li.textContent = directory;
        ul.insertBefore(li, ul.firstChild);
    });
});
