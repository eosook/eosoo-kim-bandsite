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

showsList.forEach((show) => {
    let showBar = document.createElement('div');

    // create date section
    let showBarDate = document.createElement('div');
    // adds subheader element
    let dateSubHeader = document.createElement('h3');
    dateSubHeader.innerHTML = 'DATE';
    dateSubHeader.classList.add('shows__subheader');
    // adds information element
    let dateInfo = document.createElement('p');
    dateInfo.innerText = show.date;
    dateInfo.classList.add('shows__body');
    // appends the subheader and information elements to the showBar element
    showBar.append(dateSubHeader, dateInfo);

    // create venue section
    let showBarVenue = document.createElement('div');
    // adds subheader element
    let venueSubHeader = document.createElement('h3');
    venueSubHeader.innerHTML = 'VENUE';
    venueSubHeader.classList.add('shows__subheader');
    // adds information element
    let venueInfo = document.createElement('p');
    venueInfo.innerText = show.venue;
    venueInfo.classList.add('shows__body');
    // appends the subheader and information elements to the showBar element
    showBar.append(venueSubHeader, venueInfo);

    // create location section
    let showBarLocation = document.createElement('div');
    // adds subheader element
    let locationSubHeader = document.createElement('h3');
    locationSubHeader.innerHTML = 'Location';
    locationSubHeader.classList.add('shows__subheader');
    // adds information element
    let locationInfo = document.createElement('p');
    locationInfo.innerText = show.location;
    locationInfo.classList.add('shows__body');
    // appends the subheader and information elements to the showBar element
    showBar.append(locationSubHeader, locationInfo);

    //append the date, venue, and location section to the main bar.
    showBar.append(showBarDate, showBarVenue, showBarLocation);
    shows.appendChild(showBar);
});