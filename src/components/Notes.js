import NoteItem from "./NoteItem";

const DUMMY_DATA = [
    {
        key: "n1",
        title: "Company",
        sub: "Google",
        text: "Google is the best!",
        tag: "Notes",
    },
];

const Notes = () => {
    return (
        <main className="flex flex-row flex-wrap">
            {DUMMY_DATA.map(data => {
                return <NoteItem key={data.key} title={data.title} sub={data.sub} text={data.text} tag={data.tag} />
            })}
        </main>
    );
};

export default Notes;
