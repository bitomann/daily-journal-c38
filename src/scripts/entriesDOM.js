// // This function takes a journalEntry object and returns a string template that represents a single journal entry object as HTML.


const JournalEntryComponent = {
    journalEntryFactory: (journalEntry) => {
        return `
    <div class= journalEntry>
        <h1 class="journal-date">DATE: ${journalEntry.date}</h1>
        <section class="journal-concepts">CONCEPTS: ${journalEntry.concepts}</section>
        <aside class="journal-entry">ENTRY: ${journalEntry.entry}</aside>
        <h3 class="journal-mood">MOOD: ${journalEntry.mood}</h3
    </div>
    `
    }
}

export default JournalEntryComponent