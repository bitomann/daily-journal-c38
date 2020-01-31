import apiManager from './apiManager.js'
import domFiller from "./entryComponent.js"


apiManager.getJournalEntries().then(entries => domFiller.renderEntries(entries));