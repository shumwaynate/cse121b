/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    reset();
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
        
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        // Fetch temple data from the absolute URL
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        // Convert the fetch response to a JavaScript object (.json)
        const data = await response.json();

        // Assign the JSON data to the templeList global array variable
        templeList = data;

        // Call the displayTemples function and pass it the list of temples (templeList)
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clears all child elements inside templesElement
};

/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of "filtered"
    let filter = document.getElementById('filtered').value;

    // Use a switch statement based on the filter value
    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter, just use temples as the argument
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value');
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {console.log("Dropdown selection changed"); filterTemples(templeList)});

getTemples();

