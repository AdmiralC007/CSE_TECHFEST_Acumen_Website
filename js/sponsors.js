document.addEventListener("DOMContentLoaded", () => {
    fetch("/static/data/sponsors1.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched sponsors data:", data);

            // Ensure the data is in the correct format
            if (!Array.isArray(data)) {
                console.error("Sponsors data is not an array:", data);
                return;
            }

            loadSponsors(data);
        })
        .catch(error => console.error("Error loading sponsors:", error));
});

function loadSponsors(sponsors) {
    const container = document.getElementById("sponsors-container1");

    if (!container) {
        console.error("Sponsors container not found in the HTML!");
        return;
    }

    sponsors.forEach(sponsor => {
        const sponsorCard = document.createElement("div");
        sponsorCard.classList.add("sponsor-card1");

        sponsorCard.innerHTML = `
            <img src="${sponsor.image}" alt="${sponsor.name}">
            <div class="sponsor-details1">
                <h3>${sponsor.name}</h3>
                <p>${sponsor.description}</p>
            </div>
        `;

        container.appendChild(sponsorCard);
    });
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}