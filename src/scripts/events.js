import data from "./data.js"
import entryComponentsToDom from './entryComponent.js'
import renderEntries from './renderEntryList.js'

const journalForm = document.querySelector("#journalForm")
const journalList = document.querySelector("#journalList")

const events = {

    journalEntryEventListener: () => {
        const addButton = document.querySelector("#addEntry");

        addButton.addEventListener("click", (event) => {
            event.preventDefault()
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

            data.addJournalEntry(log)
                .then(() => {
                    data.getAllJournalEntries()
                        .then(renderEntries);
                });
        });
    },

    radioButtonFilterEventListener: () => {
        const radioButton = document.getElementsByName("moodFilter");
        console.log(radioButton)
        radioButton.forEach(moodFilter => {
            moodFilter.addEventListener("click", (event) => {
                const RadioMood = event.target.value;
                data.getAllJournalEntries()
                    .then((entries) => {
                        const filteredEntries = entries.filter(entry => entry.mood === RadioMood);
                        entryComponentsToDom.journalEntryComponent(filteredEntries);
                        console.log("RADIO")
                    });
            });
        })
    }
}
export default events