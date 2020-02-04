const buildEntryLogForm = () =>
`
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
    </form>
    `;

    export default buildEntryLogForm