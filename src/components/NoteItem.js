import React from "react";
import classes from "./NoteItem.module.css";
import Tag from "./Tag";

const NoteItem = () => {
  return (
    <section className="w-48 bg-[#333333] m-4 p-4 rounded-xl flex flex-col">
      <h3 className="font-bold">Homework</h3>
      <p className="text-sm text-[#9F9F9F] mt-2">
        Find 10 videos about illustrations to share with classmates.
      </p>
      <div className="flex flex-row items-center mt-8">
        <p className="text-[#9F9F9F] text-xs border-2 rounded-md border-[#9F9F9F] px-2 py-1">
          Notes
        </p>
        <p className="text-[#9F9F9F] text-xs ml-8">Sun, 2 Apr</p>
      </div>
    </section>
  );
};

export default NoteItem;
