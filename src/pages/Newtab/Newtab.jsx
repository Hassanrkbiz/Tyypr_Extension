import React from 'react';
import { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon, TypprLogo } from './Icons';
import '../../assets/styles/tailwind.css';
import './Newtab.css';
import SessionsList from './SessionsList';

const Newtab = () => {
  const [isSessionEnd, setSessionEnd] = useState(false);
  const [isSidebarShow, setSidebarShow] = useState(false);

  function handleStatus(e) {
    console.log(e.target.checked);
  }

  return (
    <>
      <div
        className="fixed flex justify-center items-center top-1/2 right-0 bg-[#202020] rounded-[10px_0px_0px_10px] w-[34px] h-[46px] cursor-pointer"
        onClick={() => setSidebarShow(true)}
      >
        <LeftArrowIcon />
      </div>
      <aside
        className={`${
          isSidebarShow ? 'right-0' : '-right-[155px]'
        } bg-[#202020] rounded-[10px] w-[155px] fixed top-4 pb-4 pt-9 text-center transition-all duration-200 ease-in`}
      >
        <div className="flex justify-end px-3 absolute right-0 top-8">
          <span
            onClick={() => setSidebarShow(false)}
            className="cursor-pointer"
          >
            {' '}
            <RightArrowIcon />
          </span>
        </div>

        <span className="mx-auto flex justify-center">
          <TypprLogo />
        </span>

        <h6 className="text-[#F88AE6] text-[10px] font-bold my-4">see stats</h6>

        <div className="flex items-center justify-center my-6">
          <span className="text-[#8C8C8C] text-light">status</span>
          <li className="ml-3 list-none">
            <input
              onChange={handleStatus}
              className="tgl tgl-ios"
              id="cb2"
              type="checkbox"
            />
            <label className="tgl-btn" htmlFor="cb2"></label>
          </li>
        </div>

        <button
          className="text-[#b1b1b1] font-bold text-[12px] p-4"
          onClick={() => setSessionEnd(!isSessionEnd)}
        >
          {isSessionEnd ? 'End Session' : 'Start Session'}
        </button>

        <SessionsList />

        <p className="pt-4 text-center text-[#9A9A9A] font-light text-[10px]">
          version 1.20
        </p>
      </aside>
    </>
  );
};

export default Newtab;
