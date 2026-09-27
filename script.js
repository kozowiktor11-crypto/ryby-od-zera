const fishSearch = document.getElementById("fishSearch");
const fishCards = document.querySelectorAll(".fish-card");

if (fishSearch) {

    fishSearch.addEventListener("input", function () {

        const searchText = fishSearch.value.toLowerCase().trim();

        fishCards.forEach(function (card) {

            const fishName = card.querySelector("h3").textContent.toLowerCase();

            if (fishName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}