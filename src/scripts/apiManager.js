// vvv FETCH CALL vvv //
    const apiManager = {
        getJournalEntries: () => {
            return fetch("http://localhost:8088/journalEntries")
                .then(response => response.json())
                
        }
    };


export default apiManager