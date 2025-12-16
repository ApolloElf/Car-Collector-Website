// Simple data: list of car objects
const cars = [
    { id: 1, name: 'Tesla Model 3', year: 2023, horsepower: 358, topSpeed: 225 },
    { id: 2, name: 'Ferrari F8', year: 2022, horsepower: 710, topSpeed: 340 },
    { id: 3, name: 'BMW M440i', year: 2023, horsepower: 382, topSpeed: 250 }
];

// Renders an array of car objects into the #carsList element
function displayCars(carList) {
    const carsList = document.getElementById('carsList');
    if (!carsList) return; // nothing to do if container is missing

    // Start with an empty container
    carsList.innerHTML = '';

    // For each car, create simple HTML and append it
    carList.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';

        const title = document.createElement('h3');
        title.textContent = car.name;

        const stats = document.createElement('div');
        stats.className = 'stats';

        const year = document.createElement('p');
        year.textContent = `Year: ${car.year}`;

        const hp = document.createElement('p');
        hp.textContent = `Horsepower: ${car.horsepower} HP`;

        const speed = document.createElement('p');
        speed.textContent = `Top Speed: ${car.topSpeed} km/h`;

        // Build the card
        stats.appendChild(year);
        stats.appendChild(hp);
        stats.appendChild(speed);
        card.appendChild(title);
        card.appendChild(stats);

        carsList.appendChild(card);
    });
}

// Reads the search input and shows matching cars
function searchCars() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const searchTerm = input.value.trim().toLowerCase();

    // If searchTerm is empty, show all cars
    if (searchTerm === '') {
        displayCars(cars);
        return;
    }

    // Filter by name containing the search term
    const filtered = cars.filter(car => car.name.toLowerCase().includes(searchTerm));
    displayCars(filtered);
}

// When the page is ready, show all cars and wire up the search button
document.addEventListener('DOMContentLoaded', () => {
    displayCars(cars);

    // Attach event listener to the search button instead of using inline onclick
    const searchBtn = document.querySelector('.search-section button');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchCars);
    }
});
