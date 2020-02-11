const baseUrl = "http://localhost:8080"

export default {

    getAllJournalEntries() {
        return fetch(`${baseUrl}/journalEntries`)
            .then(response => response.json());
    },

    getSingleJournalEntry(id) {
        return fetch(`${baseUrl}/journalEntries/${id}`)
            .then(response => response.json());
    },
    
    addJournalEntry(journalEntry) {
        return fetch(`${baseUrl}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
        .then(response => response.json())
    },

    moodFilter: (filterByMood) => {
        return fetch(`${baseUrl}/journalEntries?mood=${filterByMood}`)
            .then(response => response.json())
    },

    editJournalEntry: (editedEntry) => {
        return fetch(`${baseUrl}/journalEntries/${editedEntry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEntry)
        })
        .then(response => response.json())
    },
    
    deleteJournalEntry(entryId) {
        return fetch(`${baseUrl}/journalEntries/${entryId}`, {
           method: "DELETE" 
        });
    }
}