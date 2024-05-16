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

let showsContainer = document.createElement('div');
showsContainer.classList.add("shows__container");
shows.appendChild(showsContainer);

function createBar(key, showKey, showBar){
    // create bar container
    let showBarSection = document.createElement('div');
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
    showBarSection.append(dateSubHeader, dateInfo);
    showBarSection.classList.add('shows__section')
    showBar.append(showBarSection);
}

showsList.forEach((show, i) => {
    let showBar = document.createElement('div');
    showBar.classList.add("shows__bar")

    // create date section
    createBar('date', show.date, showBar);
    // create venue section
    createBar('venue', show.venue, showBar);
    // create location section
    createBar('location', show.location, showBar);

    // creates and adds buy button
    let buyButton = document.createElement('button');
    buyButton.innerText = "Buy Tickets"
    buyButton.classList.add('shows__bar--button');

    //append the date, venue, and location section to the main bar.
    showBar.append(buyButton);
    
    //adds class to only the first bar
    if(i === 0){
        showBar.classList.add('shows--firstbar');
    }

    showsContainer.appendChild(showBar);
});