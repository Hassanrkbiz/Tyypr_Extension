import React from 'react';
import { useState } from 'react';
import AutoFollowerPopup from './AutoFollowerPopup';
import NotesPopup from './NotesPopup';
import Popup from './Popup';
import ScriptPopup from './ScriptPopup';

const SessionsList = () => {
  const [isShowScriptPopup, setShowScriptPopup] = useState(false);
  const [isShowNotesPopup, setShowNotesPopup] = useState(false);
  const [isShowAutoFollowerPopup, setShowAutoFollowerPopup] = useState(false);

  console.log(isShowNotesPopup, 'isShowNotesPopup');
  return (
    <>
      <div className="z-1 group relative cursor-pointer border-t border-[#444444] py-[10px] h-[55px] flex flex-col items-center justify-center">
        <span className="text-[#B6C31F] text-[15px] font-light ">4:35min</span>
        <p className="text-[#9A9A9A] font-light text-[13px]">session time</p>

        {/* UNATTENDED SESSION  */}
        <div className="transition-all ease-in duration-100 z-[-1] opacity-0  group-hover:opacity-100 group-hover:right-[155px] bg-black h-[55px] absolute -right-[155px] -top-[1px] w-[114px] flex flex-col items-center justify-center">
          <span className="text-[#B6C31F] text-[15px] font-light ">
            4:35min
          </span>
          <p className="text-[#9A9A9A] font-light text-[13px] mb-0">
            session time
          </p>
        </div>
      </div>
      <div className="border-t border-[#444444] py-[10px] h-[55px] flex flex-col items-center justify-center">
        <span className="text-[#B6C31F] text-[15px] font-light ">$45</span>
        <p className="text-[#9A9A9A] font-light text-[13px]">from 2 sales</p>
      </div>
      <div className="border-t border-[#444444] py-[10px] h-[55px] flex flex-col items-center justify-center">
        <span className="text-[#B6C31F] text-[15px] font-light ">1:35min</span>
        <p className="text-[#9A9A9A] font-light text-[13px]">reaction time</p>
      </div>
      <div className="border-t border-[#444444] py-[10px] h-[55px] flex flex-col items-center justify-center">
        <span className="text-[#B6C31F] text-[15px] font-light ">$45</span>
        <p className="text-[#9A9A9A] font-light text-[13px]">earnings /hr </p>
      </div>
      <div className="cursor-pointer  relative border-t border-[#444444]  h-[55px] flex flex-col items-center justify-center">
        <p
          onClick={() => {
            setShowScriptPopup(true);
          }}
          className="text-[#9A9A9A] font-light text-[13px] py-[10px] mb-0 w-full"
        >
          scripts{' '}
        </p>
        {isShowScriptPopup && (
          <ScriptPopup setShowScriptPopup={setShowScriptPopup} />
        )}
      </div>
      <div className="cursor-pointer relative border-t border-[#444444]  h-[55px] flex flex-col items-center justify-center">
        <p
          onClick={() => {
            setShowNotesPopup(true);
          }}
          className="text-[#9A9A9A] font-light text-[13px] py-[10px] mb-0 w-full"
        >
          notes{' '}
        </p>

        {isShowNotesPopup && (
          <NotesPopup setShowNotesPopup={setShowNotesPopup} />
        )}
      </div>
      <div className="z-1 group relative  cursor-pointer border-t border-[#444444]  h-[55px] flex flex-col items-center justify-center">
        <p
          onClick={() => {
            setShowAutoFollowerPopup(true);
          }}
          className="text-[#9A9A9A] font-light text-[13px] py-[10px] mb-0 w-full"
        >
          auto follower{' '}
        </p>
        {isShowAutoFollowerPopup && (
          <AutoFollowerPopup
            setShowAutoFollowerPopup={setShowAutoFollowerPopup}
          />
        )}

        {/* UNATTENDED SESSION  */}
        <div className="transition-all ease-in duration-100 z-[-1] opacity-0  group-hover:opacity-100 group-hover:right-[155px] bg-black h-[55px] absolute -right-[155px] top-0 w-[145px] flex flex-col items-center justify-center">
          <p className="text-[#46759B] font-light text-[13px] mb-0">
            comming soon
          </p>
        </div>
      </div>
      <div className="cursor-pointer border-t border-[#444444] py-[10px] h-[55px] flex flex-col items-center justify-center">
        <p className="text-[#9A9A9A] font-light text-[13px]">account</p>
      </div>
    </>
  );
};

export default SessionsList;
