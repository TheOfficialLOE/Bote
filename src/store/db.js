import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
    notes: '++id, title, subtitle, text, background, category'
})