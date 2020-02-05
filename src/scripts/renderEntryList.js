import entryComponentsToDom from './entryComponent.js'

const entryList = document.querySelector("#entryLog");

const renderEntries = entries => {
    // vvv Clear current content vvv //
    const entryList = document.querySelector('#journalList')
    entryList.innerHTML = ""

    // vvv Fill container with entry HTML representations vvv //
    for (const entry of entries) {
        const entryLog = entryComponentsToDom.journalEntryComponent(entry)
        entryList.innerHTML += entryLog
    }
}

export default renderEntries;