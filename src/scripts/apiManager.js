// vvv FETCH CALL vvv //
    const apiManager = {
        getJournalEntries () {
            return fetch("http://localhost:8088/journalEntries")
                .then(response => response.json())
                
        }
    }



// const getJournalEntries  = () => {
//     const apiUrl = "http://localhost:8088/journalEntries";
//     fetch(apiUrl)
//         .then(entries => entries.json())
//         .then(entriesFromApi => {
//             renderEntries(entriesFromApi);
//             console.log("GETTING?", entriesFromApi)
//         });
// }



// // vvv SEARCH vvv //    % don't care whats before or whats after %
// const apiManager = {
// const criteria = encodeURIComponent(`%${routeNameCriteria.toUpperCase}%`);
// const url = apiManager + `$where=route_name like ${criteria}`;
// return fetch(url).then(response => response.json());
// }

export default apiManager