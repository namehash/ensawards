import { EnsAwardsIcon } from "@/components/atoms/icons/EnsAwardsIcon.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function HeaderMobileNavigation() {
  const mainLinkClass =
    "text-2xl leading-normal font-medium text-black px-4 py-2 rounded-lg border-transparent transition-all duration-200 hover:bg-black/5";
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
            <PopoverButton className="min-[860px]:hidden relative z-30 focus:outline-none cursor-pointer px-[11px] py-[13px] border-transparent rounded-lg transition-all duration-200 hover:bg-white/5">
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
                      <EnsAwardsIcon className="max-sm:w-[26px] max-sm:h-[25px]" />
                      ENSAwards
                    </a>
                    <PopoverButton className="transition-all duration-200 rounded-lg border-0 inline-flex items-center whitespace-nowrap underline-none text-[#737373] cursor-pointer p-2 border-transparent hover:bg-black/5">
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
                    <ul className="py-3 flex flex-col justify-center gap-1">
                      <a href="/leaderboards" className={mainLinkClass}>
                        ENS leaderboards
                      </a>
                      <a href="/ens-best-practices" className={mainLinkClass}>
                        ENS best practices
                      </a>
                      <a href="/about" className={mainLinkClass}>
                        About
                      </a>
                      <a href="/ens-referral-awards" className={mainLinkClass}>
                        ENS Referral Awards
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
