// const journalEntries = [{
//         date: "01/14/2020",
//         concepts: "Restarting the front-end",
//         entry: "Here I go again, but I have a much more positive outlook this time and a better plan for studying",
//         mood: "positive"
//     },
//     {
//         date: "10/15/2020",
//         concepts: "Group Project 1",
//         entry: "Things were a lot easier for me this time around. My understanding of GitHub has grown exponential",
//         mood: "motivated"
//     },
//     {
//         date: "01/16/2020",
//         concepts: "THE DOM",
//         entry: "Objects, loops, and arrays clicked for me today.",
//         mood: "Ecstatic"
//     }
// ]

const journalEntryFactory = (journalEntry) => {
    return `
    <div class= journalEntry>
        <h1>DATE: ${journalEntry.date}</h1>
         <section>CONCEPTS: ${journalEntry.concepts}
         </section>
        <aside>ENTRY: ${journalEntry.entry}</aside>
        <h3>MOOD: ${journalEntry.mood}</h3
    </div>
    `
}
const renderEntries = (entries) => {
    const entryContainer = document.querySelector(".entryLog")
    entries.forEach(entry => {
        const entryHtml = journalEntryFactory(entry);
        entryContainer.innerHTML += entryHtml
    });
};


renderEntries(journalEntries)