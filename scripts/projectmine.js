/* W05: Programming Tasks */

/* Declare and initialize global variables */
const scriptureElement = document.getElementById("scripture");
let scriptureList = [];

/* async displayTemples Function */
const displayScripture = works => { //given data opens books
    reset();
    booksSets = works.books; // books contains 'book' : '1 nephi' , 'chapters':[ cont]
    booksSets.forEach(bookSet => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        
        h3.textContent = bookSet.book; //gets book ie '1 Nephi'

        article.appendChild(h3);
        scriptureElement.appendChild(article);

        chaptersList = bookSet.chapters;//chapterList contains {'chapter':1, 'reference':1 nephi 1, 'verses':[cont]}
        

        chaptersList.forEach(chapterSet =>{
            
            let h4 = document.createElement('h4');
            h4.textContent = "Chapter " + chapterSet.chapter; //gets chapter at heading 'Chapter 1'
            article.appendChild(h4);

            verses = chapterSet.verses; //contains [{'reference': 1 Nephi 1, 'text': "I nephi...", 'verse':1 }cont]
            let verseList = [];
            verses.forEach(verseData=>{
                let h5 = document.createElement('h5');
                h5.textContent = verseData.verse + ": " + verseData.text; //concats verse# to text
                
                article.appendChild(h5);
                scriptureElement.appendChild(article);
            })
        })
    });
}

/* async getTemples Function using fetch()*/
const getScriptures = async () => {
    try {
        // Fetch temple data from the absolute URL
        const response = await fetch("https://raw.githubusercontent.com/bcbooks/scriptures-json/8d8399dd2e3d6827956cd5bcdd733121592e62f3/book-of-mormon.json");

        // Convert the fetch response to a JavaScript object (.json)
        const data = await response.json();

        // Assign the JSON data to the templeList global array variable
        scriptureList = data;

        /* Create dropdowns */
        var dropdownBooks = document.getElementById("filteredBook");
        // Define the options to be added
        var options = [];
        scriptureList.books.forEach(item=>{
            console.log(item.book);
            options.push(item.book)
        })
        console.log(options);
        // Loop through the options array and create new option elements
        options.forEach(function(optionText) {
          var option = document.createElement("option");
          option.text = optionText;
          option.value = optionText; // Set the value attribute if needed
          dropdownBooks.appendChild(option); // Append the option to the dropdown
        });

        // Call the displayTemples function and pass it the list of temples (templeList)
        displayScripture(scriptureList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
}

/* reset Function */
const reset = () => {
    scriptureElement.innerHTML = ''; // Clears all child elements inside templesElement
    scriptureList = [];
};

/* filterTemples Function */
const filterScriptures = (scriptures) => {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of "filtered"
    let filterBooks = document.getElementById('filteredBook').value;
    
    console.log('filtered book value ' + filterBooks)

    let filterChapters = document.getElementById('filteredChapter').value;
    console.log('filtered chapter value ' + filterBooks);

    displayScripture(scriptures["books"].filter(books => books.book=== filterBooks && books.chapters.chapter === filterChapters));
};




/* Event Listener */
document.querySelector("#filteredBook").addEventListener("change", () => {console.log("Dropdown selection changed"); filterScriptures(scriptureList)});


getScriptures();

