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

entryDeleteEventListener: () => {

    journalList.addEventListener("click", (event) => {
        
        if (event.target.id.startsWith("deleteEntry--")) {
            const deleteBtnId = event.target.id;
            const deleteBtnArray = deleteBtnId.split("--");
            const entryIdToDelete = deleteBtnArray[1];
            
            // const entryId = event.target.id.split("--")[1]
            
            data.deleteJournalEntry(entryIdToDelete)
            .then(data.getAllJournalEntries)
            .then(renderEntries);
        } 
        console.log("DELETE CLICK");
        // else if (event.target.id.startsWith("editEntry--")) {
        //     const entryIdToEdit = event.target.id.split("--")[1]

        //     /*
        //         This function will get the recipe from the API
        //         and populate the form fields (see below)
        //     */
        //     updateFormFields(entryIdToEdit)
        // }
    })
}
}
export default events