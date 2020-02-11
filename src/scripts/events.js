import data from "./data.js"
import renderEntries from './renderEntryList.js'

const journalForm = document.querySelector("#journalForm")
const journalList = document.querySelector("#journalList")

const events = {

    clearForm: () => {
        const dateInput = document.querySelector("#journalDate");
        const conceptsInput = document.querySelector("#conceptsCovered");
        const entryInput = document.querySelector("#journalEntry");
        const moodSelector = document.querySelector("#moodForTheDay");

        dateInput.value = "";
        conceptsInput.value = "";
        entryInput.value = "";
        moodSelector.value = "";
    },

    journalEntryEventListener: () => {
        const recordButton = document.querySelector("#addEntry");

        recordButton.addEventListener("click", (event) => {
            // event.preventDefault()
            const dateInput = document.querySelector("#journalDate");
            const conceptsInput = document.querySelector("#conceptsCovered");
            const entryInput = document.querySelector("#journalEntry");
            const moodSelector = document.querySelector("#moodForTheDay");

            const entry = {
                date: dateInput.value,
                concepts: conceptsInput.value,
                entry: entryInput.value,
                mood: moodSelector.value
            };

            if (entryId.value !== "") {
                entry.id = parseInt(entryId.value);
                data.editJournalEntry(entry)
                    .then(data.getAllJournalEntries)
                    .then(renderEntries)
                } else {
                    data.addJournalEntry(entry)
                    .then(data.getAllJournalEntries)
                    .then(renderEntries)
                }
                // vvv outside of scope this. won't work have to use events.
                events.clearForm();
        });
    },

    radioButtonFilterEventListener: () => {
        const radioButtons = document.getElementsByName("moodFilter");
        //  console.log(radioButton);
        radioButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                //    debugger
                const radioMood = event.target.id;
                data.moodFilter(radioMood)
                    .then(renderEntries);
            })
        })
    },

    entryEventListener: () => {

        journalList.addEventListener("click", (event) => {
            // vvv DELETE vvv //
            if (event.target.id.startsWith("deleteEntry--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const entryIdToDelete = deleteBtnArray[1];

                data.deleteJournalEntry(entryIdToDelete)
                    .then(data.getAllJournalEntries)
                    .then(renderEntries);
            }
            // vvv EDIT vvv //
            if (event.target.id.startsWith("editEntry--")) {
                const entryToEdit = event.target.id.split("--")[1]
                // entryList.innerHtml = ""
                data.getSingleJournalEntry(entryToEdit)
                    .then(entry => {
                        // journalFormComponent(entry)
                        document.querySelector("#entryId").value = entry.id
                        document.querySelector("#journalDate").value = entry.date
                        document.querySelector("#conceptsCovered").value = entry.concepts
                        document.querySelector("#journalEntry").value = entry.entry
                        document.querySelector("#moodForTheDay").value = entry.mood
                    })
            }
        })
    }
}
export default events