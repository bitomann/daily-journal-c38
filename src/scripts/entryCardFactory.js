    const buildJournalEntryLog = journalEntry => 
    `
    <section class="journal--${journalEntry.id}>
        <h1 class="journal-date">
        DATE: ${journalEntry.date}
        </h1>
        <h3 class="journal-concepts">
        CONCEPTS: ${journalEntry.concepts}
        </h3>
        <aside class="journal-entry">
        ENTRY: ${journalEntry.entry}</aside>
        <h4 class="journal-mood">MOOD: ${journalEntry.mood}
        </h4>
    </section>
    `;

export default buildJournalEntryLog;