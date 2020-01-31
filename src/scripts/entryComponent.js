import JournalEntryComponent from './entriesDOM.js'

const entryLogContainer = document.querySelector("#entryLog")

const domFiller = {
    renderEntries: (entries) => {
        entries.forEach(entry => {
            const entryHtml = JournalEntryComponent.journalEntryFactory(entry);
            entryLogContainer.innerHTML += entryHtml
        });
    }
};

export default domFiller