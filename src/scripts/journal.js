import renderEntries from './renderEntryList.js'
import events from './events.js'
import entryComponentsToDom from './entryComponent.js'
import data from './data.js';

// vvv abracadabra form! vvv //
entryComponentsToDom.journalFormComponent();

data.getAllJournalEntries()
    .then(renderEntries)
    .then(events.journalEntryEventListener);

events.radioButtonFilterEventListener();
events.entryDeleteEventListener();
// console.log("DELETE CLICK");

// console.log(events.radioButtonFilterEventListener)
// entryComponentsToDom.journalEntryComponent(filteredEntries)