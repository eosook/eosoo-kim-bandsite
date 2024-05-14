let showsList = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

let shows = document.querySelector('.shows');
let showsHeader = document.createElement('h2');
showsHeader.innerText = "Shows";
showsHeader.classList.add('shows__header');
shows.appendChild(showsHeader);

function createBar(showBarDate, show, key, showKey){
    // adds subheader element
    let dateSubHeader = document.createElement('h3');
    dateSubHeader.innerHTML = key;
    dateSubHeader.classList.add('shows__bar--subheader');
    // adds information element
    let dateInfo = document.createElement('p');
    dateInfo.innerText = showKey;
    dateInfo.classList.add('shows__bar--body');

    if (key === 'date'){
        dateInfo.classList.add('shows__bar--date');
    }

    // appends the subheader and information elements to the showBar element
    showBarDate.append(dateSubHeader, dateInfo);
}

showsList.forEach((show) => {
    let showBar = document.createElement('div');
    showBar.classList.add("shows__bar")

    // create date section
    let showBarDate = document.createElement('div');
    createBar(showBarDate, show, 'date', show.date);
    // create venue section
    let showBarVenue = document.createElement('div');
    createBar(showBarVenue, show, 'venue', show.venue);
    // create location section
    let showBarLocation = document.createElement('div');
    createBar(showBarLocation, show, 'location', show.location);

    // creates and adds buy button
    let buyButton = document.createElement('button');
    buyButton.innerText = "Buy Tickets"
    buyButton.classList.add('shows__bar--button');

    //append the date, venue, and location section to the main bar.
    showBar.append(showBarDate, showBarVenue, showBarLocation, buyButton);
    shows.appendChild(showBar);
});