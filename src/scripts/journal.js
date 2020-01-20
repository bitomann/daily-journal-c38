console.log("Hola!");

const journalEntry1 = [
    {
        date: "01/14/2020",
        concepts: "Restarting the front-end",
        journalEntry: "Here I go again, but I have a much more positive outlook this time and a better plan for studying",
        mood: "positive"
    },
    {
        date: "10/15/2020",
        concepts: "Group Project 1",
        journalEntry: "Things were a lot easier for me this time around. My understanding of GitHub has grown exponential",
        mood: "motivated"
    },
    {
        date: "01/16/2020",
        concepts: "THE DOM",
        journalEntry: "Objects, loops, and arrays clicked for me today.",
        mood: "Ecstatic"
    }
]
console.log(journalEntry1);

const journalEntryTwo = {

}

const allJournalEntries = []
allJournalEntries.push(journalEntry1)
console.log(allJournalEntries);

const makeJournalEntryComponent = ( date,concepts, journalEntry, mood ) => {
    return `
    <div class= journalEntry>
        <h1>${date}</h1>
        <section>${concepts}</section>
        <aside>${journalEntry}</aside>
        <h3>${mood}</h3
    </div>       
    `
}

const renderJournalEntries = (allJournalEntries) => {

}

renderJournalEntries(allJournalEntries)
