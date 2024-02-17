/* Declare and initialize global variables */
const scriptureElement = document.getElementById("scripture");
let scriptureList = []; //holds the current set of scriptures being viewed
let filteredChapters = []; //holds list of chapter that are in selected book

/* Function to display scripture */
const displayScripture = (bookSet) => {
    reset(); // Clear existing content

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = bookSet.book; // Book title
    article.appendChild(h3);

    const chaptersList = bookSet.chapters;
    chaptersList.forEach(chapterSet => {
        const h4 = document.createElement('h4');
        h4.textContent = "Chapter " + chapterSet.chapter; // Chapter heading
        article.appendChild(h4);

        const verses = chapterSet.verses;
        verses.forEach(verseData => {
            const h5 = document.createElement('h5');
            h5.textContent = verseData.verse + ": " + verseData.text; // Verse content
            article.appendChild(h5);
        });

        // Store chapters for the selected book for filtering
        filteredChapters.push(chapterSet.chapter);
    });

    scriptureElement.appendChild(article); // Append article to scriptureElement
};

/* Function to fetch scriptures from the API */
const getScriptures = async () => {
    try {
        // Fetch scripture data from the API
        const response = await fetch("https://raw.githubusercontent.com/bcbooks/scriptures-json/8d8399dd2e3d6827956cd5bcdd733121592e62f3/book-of-mormon.json");
        const data = await response.json();
        scriptureList = data.books; // Assign scripture data to scriptureList

        // Create dropdown options for books
        const dropdownBooks = document.getElementById("filteredBook");
        scriptureList.forEach(book => {
            const option = document.createElement("option");
            option.text = book.book;
            option.value = book.book;
            dropdownBooks.appendChild(option);
        });

        // Display initial scripture content
        displayScripture(scriptureList[0]);
    } catch (error) {
        console.error("Error fetching scripture data:", error);
    }
};

/* Function to reset the scripture display */
const reset = () => {
    scriptureElement.innerHTML = ''; // Clear scriptureElement
    filteredChapters = []; // Reset filteredChapters array
};

const filterScriptures = (part) => {
    reset(); // Reset the display
    console.log("filtered " + part);

    if (part == 'book') {
        const selectedBook = document.getElementById('filteredBook').value;
        const selectedBookData = scriptureList.find(book => book.book === selectedBook);

        if (selectedBookData) {
            // Populate the filteredChapter dropdown with chapters from the selected book
            const dropdownChapter = document.getElementById("filteredChapter");
            dropdownChapter.innerHTML = ''; // Clear existing options

            selectedBookData.chapters.forEach(chapter => {
                const option = document.createElement("option");
                option.text = "Chapter " + chapter.chapter;
                option.value = chapter.chapter;
                dropdownChapter.appendChild(option);
            });

            // Display scripture for selected book
            displayScripture(selectedBookData);
        } else {
            console.error("No matching book found.");
        }
    } else if (part == 'chapter') {
        const selectedBook = document.getElementById('filteredBook').value;
        const selectedChapter = parseInt(document.getElementById('filteredChapter').value);
        const selectedBookData = scriptureList.find(book => book.book === selectedBook);

        if (selectedBookData) {
            const selectedChapterData = selectedBookData.chapters.find(chapter => chapter.chapter === selectedChapter);

            if (selectedChapterData) {
                // Display scripture for selected chapter
                displayScripture({
                    book: selectedBookData.book,
                    chapters: [selectedChapterData]
                });
            } else {
                console.error("No matching chapter found.");
            }
        } else {
            console.error("No matching book found.");
        }
    }
};


/* Event Listeners */
document.querySelector("#filteredBook").addEventListener("change", () => {
    console.log("Dropdown selection changed");
    filterScriptures('book');
});

document.querySelector("#filteredChapter").addEventListener("change", () => {
    console.log("Filtered chapter selection changed");
    // Implement filtering based on selected chapter if needed
    filterScriptures('chapter');
});

/* Fetch scriptures when the page loads */
getScriptures();
