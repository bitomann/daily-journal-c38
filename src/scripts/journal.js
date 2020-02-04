import apiManager from './apiManager.js'
import renderLogs from './entryLogList.js'
import buildJournalEntryLog from './entryAddFormToDom.js'
import addEntryLogEventListener from './addEntryLogEvents.js'

// vvv abracadabra form! vvv //
buildJournalEntryLog();
addEntryLogEventListener();

apiManager.getAllJournalEntries()
    .then(renderLogs)