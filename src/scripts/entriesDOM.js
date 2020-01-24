const journalEntryFactory = (journalEntry) => {
    return `
    <div class= journalEntry>
        <h1>DATE: ${journalEntry.date}</h1>
         <section>CONCEPTS: ${journalEntry.concepts}
         </section>
        <aside>ENTRY: ${journalEntry.entry}</aside>
        <h3>MOOD: ${journalEntry.mood}</h3
    </div>
    `;
};
