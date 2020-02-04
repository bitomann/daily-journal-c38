import apiActions from "./apiManager"
import JournalEntryComponent from './entriesDOM.js'

const entryLogContainer = document.querySelector("#entryLog")

export default {
    journalEntryDeleteEventListener: () => {
        
    }
}


// const domFiller = {
//     renderEntries: (entries) => {
//         entries.forEach(entry => {
//             const entryHtml = JournalEntryComponent.journalEntryFactory(entry);
//             entryLogContainer.innerHTML += entryHtml
//         });
//     }
// };

// export default domFiller