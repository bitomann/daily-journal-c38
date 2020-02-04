import apiManager from "./apiManager.js"
import renderLogs from "./entryLogList.js"

const addEntryLogEventListener = () => {
    const addButton = document.querySelector("#addEntry");

    addButton.addEventListener("click", () => {
        const dateInput = document.querySelector("#journalDate");
        const conceptsInput = document.querySelector("#conceptsCovered");
        const entryInput = document.querySelector("#journalEntry");
        const moodSelector = document.querySelector("#moodForTheDay");

        const log = {
            date: dateInput.value,
            concepts: conceptsInput.value,
            entry: entryInput.value,
            mood: moodSelector.value
        };

        apiManager.addJournalEntry(entry)
            .then(() => {
                apiManager.getAllJournalEntries()
                .then(renderLogs);
            });
    });
};

export default addEntryLogEventListener;