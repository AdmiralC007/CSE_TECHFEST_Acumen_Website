document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/committee.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.committee-container1');

            data.forEach(member => {
                const card = document.createElement('div');
                card.classList.add('committee-card');

                card.innerHTML = `
                    <img src="/static/images/${member.image}" alt="${member.name}">
                    <h3 class="committee-name">${member.name}</h3>
                    <p class="committee-description">${member.description}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading committee members:", error));
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}