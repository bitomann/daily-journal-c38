import buildJournalEntryLog from "./entryCardFactory.js"

// vvv targets domEl vvv //
const entryLog = document.querySelector("#entryLog");
// vvv makes function to show up as HTML by calling buildJournalEntryLog() vvv //
const renderAddEntryLog = () => {
    entryLog.innerHTML = buildJournalEntryLog();
}

export default renderAddEntryLog;