// vvv FETCH CALL vvv //
const getJournalEntries  = () => {
    const apiUrl = "http://localhost:8088/journalEntries";
    fetch(apiUrl)
        .then(entries => entries.json())
        .then(entriesFromApi => {
            renderEntries(entriesFromApi);
            console.log("GETTING?", entriesFromApi)
        });
}