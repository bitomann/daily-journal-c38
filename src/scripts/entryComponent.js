const entryComponentsToDom = {

    journalEntryComponent(journalEntry) {

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
        <h4 class="journal-mood">MOOD: ${journalEntry.mood}
        </h4>
    </section>
    `
    },

    journalFormComponent() {
        const entryLog = document.querySelector("#journalForm");
        entryLog.innerHTML = `
    <form action="">
        <fieldset>
            <h1>Bito's Daily Journal</h1>
            <label for="journalDAte">Date Of Entry
                <input type="date" name="journalDate" id="journalDate">
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="conceptsCovered">Concepts Covered
                <input type="input" name="conceptsCovered" id="conceptsCovered">
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="journalEntry">Journal Entry
                <textarea name="journalEntry" id="journalEntry" cols="30" rows="1"></textarea>
            </label>
        </fieldset>
    </form>
    <form action="">
        <fieldset>
            <label for="moodForTheDay">Mood For The Day</label>
            <select id=moodForTheDay class="moodForTheDay" name="moodForTheDay">
                <option value="Ecstatic">Ecstatic</option>
                <option value="Motivated">Motivated</option>
                <option value="Frustrated">Frustrated</option>
                <option value="Brain Dead">Brain Dead</option>
            </select>
        </fieldset>
    </form>

    <form action="">
        <fieldset>
            <button id="addEntry" value="recordJournalEntry">Record Journal Entry
            </button>
        </fieldset>

        <fieldset>
            <legend>Filter Journal Entries by Mood</legend>
            <div>
                <label for="ecstatic">Ecstatic</label>
                <input type="radio" id="ecstatic" name="moodFilter" value="1" checked>
                
                <label for="motivated">Motivated</label>
                <input type="radio" id="motivated" name="moodFilter" value="2" checked>
                
                <label for="frustrated">Frustrated</label>
                <input type="radio" id="frustrated" name="moodFilter" value="3" checked>
                
                <label for="brainDead">Brain Dead</label>
                <input type="radio" id="brainDead" name="moodFilter" value="4" checked>
            </div>
        </fieldset>
    </form>
    `;
    }
}
export default entryComponentsToDom