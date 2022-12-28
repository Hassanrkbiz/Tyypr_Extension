import React from 'react';
import { CrossIcon } from './Icons';

const NotesPopup = ({ setShowNotesPopup }) => {
  return (
    <>
      <div className="absolute bottom-0 -left-[299px] w-[300px] bg-[#202020] p-[10px] z-20 border-2 border-[#B6C31F] rounded-md">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[16px] mb-0 text-white">Notes</h4>

          <span onClick={() => setShowNotesPopup(false)}>
            <CrossIcon />
          </span>
        </div>
        <textarea
          cols={10}
          className="resize-none outline-none p-2 text-[14px] text-[#8C8C8C] bg-transparent border-b w-full min-h-[180px]"
          placeholder="Description"
        ></textarea>
        <button
          onClick={() => {
            setShowNotesPopup(false);
          }}
          className="bg-[#B6C31F] text-white mt-3  px-4 py-[6px] text-[14px] transition-all duration-200 ease-in rounded-sm hover:shadow-md hover:shadow-[#B6C31F]"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default NotesPopup;
