const baseUrl = "http://localhost:8080/"

export default {

    getAllJournalEntries() {
        return fetch(`${baseUrl}/journalEntries`)
            .then(response => response.json);
    },
    addJournalEntry(entry) {
        return fetch(`${baseUrl}/journalEntries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    // deleteJournalEntry(entryId) {
    //     return fetch(`${baseUrl}/journalEntries/${entryId}`, {
    //        method: "DELETE" 
    //     });
    // }
}










// const apiManager = {
//         getJournalEntries: () => {
//             return fetch("http://localhost:8088/journalEntries")
//                 .then(response => response.json())
                
//         }
//     };


// export default apiManager