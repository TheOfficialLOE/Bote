import React from "react";

const NoteItem = (props) => {
  return (
    <section className="w-48 bg-[#333333] m-4 p-4 rounded-xl flex flex-col">
      <h3 className="font-bold">{props.title}</h3>
      <p className="text-sm text-[#9F9F9F] mt-2">
          {props.text}
      </p>
      <div className="flex flex-row items-center mt-8">
        <p className="text-[#9F9F9F] text-xs border-2 rounded-md border-[#9F9F9F] px-2 py-1">
            {props.tag}
        </p>
        <p className="text-[#9F9F9F] text-xs ml-8">{new Date().toISOString().slice(0, 10).replace(/-/g,"/")}</p>
      </div>
    </section>
  );
};

export default NoteItem;
