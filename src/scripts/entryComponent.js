import journalEntryFactory from "./entriesDOM"

const renderEntries = (entries) => {
    const entryLogContainer = document.querySelector("#entryLog")
    entries.forEach(entry => {
        const entryHtml = journalEntryFactory(entry);
        entryLogContainer.innerHTML += entryHtml
    });
};


// const searchResultsDomManager = {
//     busStopFactory(busStop){
//         return `
//         <section class=bus-stop>
//             <div></div>
//             <div></div>
//         </section>
//         `
//     }
//     renderSearchResults(searchResults) {
//         const container = document.querySelector("#search-results");
//         searchResults.forEach(busTop => {
//             container.innerHTML += 
//         })
//     }
// }

export default renderEntries