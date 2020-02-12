const entryComponentsToDom = {
    // vvv this takes in stuff to build and populate the list of entries to the DOM vvv //
    journalEntryComponent(journalEntry) {
        // debugger
        const moodInitialCap = journalEntry.mood.charAt(0).toUpperCase() + journalEntry.mood.slice(1)
        // ^^^ why is this still getting in the way, why is mood not defined??? ^^^ //
        return `
    <section class="journal--${journalEntry.id}>
        <h1 class="journal-concepts">
        CONCEPTS: ${journalEntry.concepts}
        </h1>
        <h4 class="journal-date">
        DATE: ${journalEntry.date}
        </h4>
        <aside class="journal-entry">
        ENTRY: ${journalEntry.entry}</aside>
        <h4 class="journal-mood">MOOD: ${moodInitialCap}
        </h4>
        </section>
        <button id="deleteEntry--${journalEntry.id}">Delete</button>
        <button id="editEntry--${journalEntry.id}">Edit</button>
        <br>
        <br>
        <br>
        <br>
    `
    },

    // vvv this builds the form that takes in user input that goes into the list of entries vvv //
    journalFormComponent() {
        const entryLog = document.querySelector("#journalForm");
        entryLog.innerHTML = `
    <form action="">
    <input type="hidden" id="entryId" value="" />
        <fieldset>
            <h1>Bito's Daily Journal</h1>
            <label for="journalDAte">Date Of Entry
                <input type="date" name="journalDate" class="formInput" id="journalDate">
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="conceptsCovered">Concepts Covered
                <input type="input" name="conceptsCovered" class="formInput" id="conceptsCovered">
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="journalEntry">Journal Entry
                <textarea name="journalEntry" class="formInput" id="journalEntry" cols="30" rows="1"></textarea>
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="moodForTheDay">Mood For The Day</label>
            <select id=moodForTheDay class="moodForTheDay" name="moodForTheDay">
                <option value="ecstatic">Ecstatic</option>
                <option value="motivated">Motivated</option>
                <option value="frustrated">Frustrated</option>
                <option value="brainDead">Brain Dead</option>
            </select>
        </fieldset>
    </form>

        <fieldset>
            <button id="addEntry" value="recordJournalEntry">
            Record
            </button>
        </fieldset>

        <fieldset class=filterAndSearch>
            <legend>Filter Journal Entries by Mood</legend>
            <div class="radioButtons">
                <label for="ecstatic">Ecstatic</label>
                <input type="radio" id="ecstatic" name="moodFilter" value="1" checked>
                
                <label for="motivated">Motivated</label>
                <input type="radio" id="motivated" name="moodFilter" value="2" checked>
                
                <label for="frustrated">Frustrated</label>
                <input type="radio" id="frustrated" name="moodFilter" value="3" checked>
                
                <label for="brainDead">Brain Dead</label>
                <input type="radio" id="brainDead" name="moodFilter" value="4" checked>
                
                <div class="searchContainer">
                <label for="searchEntries">Search Entries</label>
                  <input type="text" placeholder="Search Entries..." id="searchInput" name="searchInput">
                </div>
            </div>
                  <br>
                  </fieldset>
                  `;
    }
}

export default entryComponentsToDom