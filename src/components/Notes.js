import NoteItem from "./NoteItem";

const DUMMY_DATA = [{
   title: "Company",
   sub: "Google",
   data: "Google is the best!",
   date: Date.now()
}];

const Notes = () => {
    return (
        <main>
            <NoteItem />
        </main>
    )
};


export default Notes;