import buildJournalEntryLog from "./entryCardFactory.js"

const entryLogList = document.querySelector("#entryLog");

    const renderLogs = entries => {
        // vvv Clear current content vvv //
        entryLogList.textContent = ""

        // vvv Fill container with recipe HTML representations vvv //
        for (const entry of entries) {
            const entryLog = buildJournalEntryLog(entry)
            entryLogList.innerHTML += entryLog
        }
    }

    export default renderLogs;