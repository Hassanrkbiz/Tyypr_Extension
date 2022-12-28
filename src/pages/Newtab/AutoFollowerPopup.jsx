import React from 'react';
import { CrossIcon } from './Icons';

const AutoFollowerPopup = ({ setShowAutoFollowerPopup }) => {
  return (
    <>
      <div className="absolute bottom-0 -left-[249px] w-[250px] bg-[#202020] p-[10px] z-20 border-2 border-[#B6C31F] rounded-md">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[16px] mb-0 text-white">Script</h4>

          <span onClick={() => setShowAutoFollowerPopup(false)}>
            <CrossIcon />
          </span>
        </div>

        <input
          type="text"
          placeholder="Title"
          className="outline-none p-2 text-[14px] text-[#8C8C8C] bg-transparent border-b w-full"
        />
        <textarea
          cols={10}
          className="resize-none outline-none p-2 text-[14px] text-[#8C8C8C] bg-transparent border-b w-full min-h-[100px]"
          placeholder="Description"
        ></textarea>
        <button
          onClick={() => {
            setShowAutoFollowerPopup(false);
          }}
          className="bg-[#B6C31F] text-white mt-3  px-4 py-[6px] text-[14px] transition-all duration-200 ease-in rounded-sm hover:shadow-md hover:shadow-[#B6C31F]"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default AutoFollowerPopup;
