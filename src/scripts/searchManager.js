import data from "./data.js"
import entryComponentsToDom from "./entryComponent.js"
// import renderEntries from './renderEntryList.js'

// vvv filters through data and spits out search results vvv //
const searchManager = {
    searchEntries: (input) => {
        // vvv grabs all entries then filters through them vvv //
        data.getAllJournalEntries().then((entries) => {
            console.log("SEARCH ENTRIES", entries)
            const searchResults = entries.filter((entry) => {
                let counter = 0;
                for (const value of Object.values(entry)) {
                    if (value.toString().includes(input)) {
                        counter++
                    }
                }
                if (counter > 0) {
                    return true;
                } else {
                    return false;
                }
            })
            console.log("SEARCH RESULTS", searchResults)
            entryComponentsToDom.journalEntryComponent(searchResults)
                .then(renderEntries);
        })
    }
}

export default searchManager