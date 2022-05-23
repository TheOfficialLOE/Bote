import {db} from "./db";

export const readAll = async () => {
    return await db.notes.toArray();
}

export const readSingle = async (id) => {
    return await db.notes.get({ id });
}

export const update = async (id, filed) => {
    return await db.notes.update(id, filed);
}