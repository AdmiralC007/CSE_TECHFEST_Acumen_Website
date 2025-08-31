document.addEventListener('DOMContentLoaded', () => {
    console.log('Cyberpunk vibes activated');

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Highlight active section during scroll
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
// Set the launch date (YEAR, MONTH (0-indexed), DAY, HOUR, MINUTE, SECOND)
const launchDate = new Date('2025-04-10T09:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
        document.getElementById('countdown').innerHTML = '🚀 Event is Live!';
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/events.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.events-container');

            data.forEach(event => {
                const card = document.createElement('div');
                card.classList.add('event-card');

                card.innerHTML = `
                <img src="/static/images/${event.image}" alt="${event.name}" class="event-image">
                <div class="event-content">
                    <h3 class="event-name">${event.name}</h3>
                    <div class="event-description-container">
                        <p class="event-description">${event.description}</p>
                    </div>
                    <button class="event-button" onclick="window.location.href='${event.url}'">REGISTER NOW</button>
                </div>
            `;
            
            

                // Redirect when clicking the entire card
                card.addEventListener('click', () => {
                    window.location.href = event.url;
                });

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading events:", error));
});
function scrollEvents(direction) {
    const container = document.querySelector('.events-container');
    const scrollAmount = 300; // Adjust scroll distance

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/sponsors.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.sponsors-container');

            data.forEach(sponsor => {
                const card = document.createElement('div');
                card.classList.add('sponsor-card');

                card.innerHTML = `
                    <img src="/static/images/${sponsor.image}" alt="Sponsor">
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading sponsors:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/committee1.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.committee-container');

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

            // Duplicate cards for seamless scrolling
            // const duplicateCards = container.innerHTML;
            // container.innerHTML += duplicateCards;
        })
        .catch(error => console.error("Error loading committee members:", error));
});


document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.event-container')) {
        fetch('/static/data/events2.json')
            .then(response => response.json())
            .then(data => {
                const eventName = document.title.split('|')[0].trim();
                const event = data.find(e => e.name === eventName);

                if (event) {
                    document.querySelector('.event-title').innerText = event.name;
                    document.querySelector('.event-description').innerText = event.description;
                    document.querySelector('.event-poster').src = "/static/images/" + event.image;
                    document.querySelector('.register-btn').href = event.register_link;
                    document.querySelector('.event-contact').innerText = "Contact: " + event.contact;

                    // Populate Rules
                    const rulesList = document.querySelector('.event-rules ul');
                    rulesList.innerHTML = "";
                    event.rules.forEach(rule => {
                        const li = document.createElement("li");
                        li.innerText = rule;
                        rulesList.appendChild(li);
                    });
                }
            })
            .catch(error => console.error("Error loading event data:", error));
    }
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/events.json') // Fetch events.json
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('events-container');

            data.forEach(event => {
                const card = document.createElement('div');
                card.classList.add('event-card');

                card.innerHTML = `
                    <img src="/static/images/${event.image}" alt="${event.name}" class="event-image">
                    <h3 class="event-name">${event.name}</h3>
                    <p class="event-description">${event.description}</p>
                    <button class="event-button" onclick="window.location.href='${event.url}'">Explore 🔍</button>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading events:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('/static/data/committee.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.committee-container');

            data.forEach(member => {
                const card = document.createElement('div');
                card.classList.add('committee-card');

                card.innerHTML = `
                    <img src="../static/images/${member.image}" alt="${member.name}">
                    <p class="committee-name">${member.name}</p>
                `;

                // container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading committee members:", error));
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


