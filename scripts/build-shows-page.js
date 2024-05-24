import {BandSiteApi} from "./band-site-api.js";
const myApiKey = "11173e92-77d4-4ea9-bddd-e747183daf47";
let bandSiteData = new BandSiteApi(myApiKey);

let shows = document.querySelector('.shows');

let showsHeader = document.createElement('h2');
showsHeader.innerText = "Shows";
showsHeader.classList.add('shows__header');
shows.appendChild(showsHeader);

let showsContainer = document.createElement('div');
showsContainer.classList.add("shows__container");
shows.appendChild(showsContainer);

function createBarSection(key, showKey, showBar){
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

let activeBarExists = false;

async function createBar(){
    let showsList = await bandSiteData.getShows();
    showsList.forEach((show, i) => {
        let showBar = document.createElement('div');
        console.log(show);
        showBar.classList.add("shows__bar");
        showBar.addEventListener("click", () =>{
            if (activeBarExists){
                document.querySelector(".shows__bar--active").classList.remove("shows__bar--active");
            }
            showBar.classList.add("shows__bar--active");
            activeBarExists = true;
        })
        // create date section
        const showDate = new Date(show.date);
        createBarSection('date', showDate.toDateString(), showBar);
        // create venue section
        createBarSection('venue', show.place, showBar);
        // create location section
        createBarSection('location', show.location, showBar);
    
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
}

createBar();