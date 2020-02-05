const baseUrl = "http://localhost:8080"

export default {

    getAllJournalEntries() {
        return fetch(`${baseUrl}/journalEntries`)
            .then(response => response.json());
    },
    addJournalEntry(journalEntry) {
        return fetch(`${baseUrl}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        });
    },
    // deleteJournalEntry(entryId) {
    //     return fetch(`${baseUrl}/journalEntries/${entryId}`, {
    //        method: "DELETE" 
    //     });
    // }
}