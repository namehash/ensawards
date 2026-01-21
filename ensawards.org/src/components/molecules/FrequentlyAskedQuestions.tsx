import type { ReactElement } from "react";

import { FoldableCard } from "../atoms/cards/FoldableCard.tsx";

export interface FrequentlyAskedQuestion {
  question: string;
  answer: ReactElement;
}

const tertiaryLinkStyles =
  "text-black hover:underline hover:underline-offset-[25%] transition-all duration-200";
const textStyles = "text-base leading-normal font-normal text-muted-foreground";

const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: "Are there limitations to the referral links?",
    answer: (
      <p className={textStyles}>
        Referrals made through links to the official ENS Manager App at app.ens.domains support the
        tracking of referrals for any number of .eth name registrations or renewals that are
        performed one at a time. However, there is a limitation of the official ENS Manager App (not
        of the ENS Referral Program more broadly) that the official ENS Manager App does not support
        the tracking of referrals when renewals are made in bulk (all within a single transaction).
      </p>
    ),
  },
  {
    question: "How do I earn points?",
    answer: (
      <p className={textStyles}>
        Each year of .eth name registrations or renewals attributed to you through referrals earns
        you 1 point. A renewal for 6 months earns 0.5 points. A registration for 3 years earns 3
        points. Etc. Points earned make no consideration of name length or temporary premium prices
        on recently released .eth names.
      </p>
    ),
  },
  {
    question: "What's an $ENS?",
    answer: (
      <p className={textStyles}>
        It's{" "}
        <a
          href="https://docs.ens.domains/dao/token"
          target="_blank"
          rel="noreferrer"
          className={tertiaryLinkStyles}
        >
          the official ENS token
        </a>{" "}
        which can be held and{" "}
        <a
          href="https://delegate.ens.domains/"
          target="_blank"
          rel="noreferrer"
          className={tertiaryLinkStyles}
        >
          delegated
        </a>{" "}
        to yourself or others to{" "}
        <a
          href="https://www.tally.xyz/gov/ens"
          target="_blank"
          rel="noreferrer"
          className={tertiaryLinkStyles}
        >
          vote in ENS DAO governance
        </a>{" "}
        that influences the future of the ENS protocol or{" "}
        <a
          href="https://coinmarketcap.com/currencies/ethereum-name-service/"
          target="_blank"
          rel="noreferrer"
          className={tertiaryLinkStyles}
        >
          freely swapped for cash
        </a>
        .
      </p>
    ),
  },
];

export interface FrequentlyAskedQuestionsProps {
  itemsToShow: string[];
  initiallyOpenItem?: number;
}
export function FrequentlyAskedQuestions({
  itemsToShow,
  initiallyOpenItem = 0,
}: FrequentlyAskedQuestionsProps) {
  return (
    <div className="w-full min-[810px]:w-1/2 min-[810px]:min-w-1/2 h-fit flex flex-col justify-start items-start gap-2">
      {frequentlyAskedQuestions
        .filter((faq) => itemsToShow.includes(faq.question))
        .map((faq, idx) => (
          <FoldableCard
            key={`FAQ-#${idx}`}
            initiallyOpen={idx === initiallyOpenItem}
            header={faq.question}
          >
            {faq.answer}
          </FoldableCard>
        ))}
    </div>
  );
}
