import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import ENSAwardsLogo from "../../assets/ENSAwardsLogo.svg";

export default function HeaderMobileNavigation() {
  const mainLinkClass = "text-2xl leading-normal font-medium text-black";
  const closeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const hamburgerMenuIcon = (
    <svg width="20" height="15" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1H17M1 7H17M1 13H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="w-full max-w-[860px]">
      <Popover className="relative">
        {({ open }) => (
          <>
            <PopoverButton className="min-[860px]:hidden relative z-30 p-1 mt-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-black cursor-pointer">
              <span className="sr-only">Open menu</span>
              {hamburgerMenuIcon}
            </PopoverButton>
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease duration-250 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <PopoverPanel className="min-[860px]:hidden fixed inset-0 z-30 h-screen w-full bg-white">
                <div className="flex h-full flex-col justify-between px-5 sm:px-8 pb-5">
                  <div className="w-full justify-between items-center flex absolute px-5 sm:px-8 h-[56px] sm:h-[70px] top-0 left-0 max-w-[860px] border-b border-b-black/5">
                    <a
                      href="/"
                      className="h-fit flex justify-center items-center gap-[10px] text-[19px] sm:text-2xl text-black not-italic font-bold leading-[25px] sm:leading-8"
                    >
                      <img
                        src={ENSAwardsLogo.src}
                        className="max-sm:w-[26px] max-sm:h-[25px]"
                        alt="ENSNode"
                      />
                      ENSAwards
                      <span className="w-fit h-fit flex flex-row flex-nowrap justify-center items-center bg-black text-white px-[6px] sm:pt-[2px] pt-[3px] pb-[3px] rounded-full text-[10px] leading-[1.1] font-semibold transition-all duration-200">
                        Alpha
                      </span>
                    </a>
                    <PopoverButton className="transition rounded-lg border-0 inline-flex items-center whitespace-nowrap underline-none text-[#737373] cursor-pointer">
                      {/*NOTE: this results in a browser error (not-breaking) but is directly copied from namekit.io solution*/}
                      <span className="sr-only">Close menu</span>
                      {closeIcon}
                    </PopoverButton>
                  </div>
                  <div
                    className={cn(
                      "py-16 flex flex-col h-full justify-center overflow-y-auto scrollbar-styled",
                    )}
                  >
                    <ul className="py-3 flex flex-col justify-center gap-5">
                      <a href="/ens-best-practices" className={mainLinkClass}>
                        ENS best practices
                      </a>
                      <a href="/benchmarks" className={mainLinkClass}>
                        App benchmarks
                      </a>
                      <a href="/about" className={mainLinkClass}>
                        About
                      </a>
                      <a href="/ens-referral-program" className={mainLinkClass}>
                        ENS Referral Program
                      </a>
                    </ul>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
