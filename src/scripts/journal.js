import renderEntries from './renderEntryList.js'
import events from './events.js'
import entryComponentsToDom from './entryComponent.js'
import data from './data.js';

entryComponentsToDom.journalFormComponent();

data.getAllJournalEntries()
    .then((data) => {
        renderEntries(data)
        events.journalEntryEventListener()
    })

events.radioButtonFilterEventListener();
events.searchJournalEntries();
events.entryEventListener();