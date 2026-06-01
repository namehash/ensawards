import type { ReactElement } from "react";

import { FoldableCard } from "../atoms/cards/FoldableCard.tsx";

export const faqIds = {
  RefLinkLimitations: "referral-link-limitations",
  EarningPoints: "earning-points",
  ENSTokens: "ens-tokens",
  RewardsToEarn: "rewards-to-earn",
  SmartContractVsRefLink: "smart-contract-vs-referral-link",
  OnchainRef: "onchain-referral",
  RenewalsVsRegistrations: "renewals-vs-registrations",
  ThresholdNotAchieved: "threshold-not-achieved",
  IntegrationTime: "integration-time",
} as const;

export type FaqId = (typeof faqIds)[keyof typeof faqIds];

export interface FrequentlyAskedQuestion {
  id: FaqId;
  question: string;
  answer: ReactElement;
}

const tertiaryLinkStyles =
  "text-black hover:underline hover:underline-offset-[25%] transition-all duration-200";
const textStyles = "text-base leading-normal font-normal text-muted-foreground";

const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    id: faqIds.RefLinkLimitations,
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
    id: faqIds.EarningPoints,
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
    id: faqIds.ENSTokens,
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
  {
    id: faqIds.RewardsToEarn,
    question: "How much can I earn?",
    answer: (
      <p className={textStyles}>
        You earn up to a 50% revenue share on every .eth name registration and renewal attributed to
        you. You must generate at least $100 in &quot;base revenue contribution&quot; within an
        edition to qualify for awards. Awards are paid in USDC within 15 days of the edition
        closing.
      </p>
    ),
  },
  {
    id: faqIds.SmartContractVsRefLink,
    question: "What's the difference between referral links and smart contract integration?",
    answer: (
      <p className={textStyles}>
        Referral links direct users to the ENS Manager App with your attribution. They are easy to
        set up, and allow you to launch within minutes. Smart contract integration lets you build
        custom .eth registration and renewal flows directly into your app, giving you full UX
        control. Both earn the same up to 50% revenue share.
      </p>
    ),
  },
  {
    id: faqIds.OnchainRef,
    question: "How does onchain referral attribution work?",
    answer: (
      <p className={textStyles}>
        When your app calls the ENS registration or renewal contracts, you pass your referrer
        address as a parameter. Attribution is recorded onchain and is indexed by our open source
        rules engine that powers the ENSAwards referral leaderboards.
      </p>
    ),
  },
  {
    id: faqIds.RenewalsVsRegistrations,
    question: "Do renewals count the same as new registrations?",
    answer: (
      <p className={textStyles}>
        Yes. Renewals generate the same referral revenue and awards as new registrations.
      </p>
    ),
  },
  {
    id: faqIds.ThresholdNotAchieved,
    question: "What happens if I don't hit the minimum revenue contribution threshold?",
    answer: (
      <p className={textStyles}>
        You don't qualify for awards in that edition. But your referral activity is a strong signal.
        Use what you learned and apply it to the next edition.
      </p>
    ),
  },
  {
    id: faqIds.IntegrationTime,
    question: "How long does it take to integrate?",
    answer: (
      <p className={textStyles}>
        A referral link takes no more than 30 seconds to generate. A smart contract integration can
        be as simple as a 1-line code change to an existing registration or renewal flow.
      </p>
    ),
  },
];

export interface FrequentlyAskedQuestionsProps {
  itemsToShow: FaqId[];
  initiallyOpenItem?: number;
}
export function FrequentlyAskedQuestions({
  itemsToShow,
  initiallyOpenItem = 0,
}: FrequentlyAskedQuestionsProps) {
  return (
    <div className="w-full min-[810px]:w-1/2 min-[810px]:min-w-1/2 h-fit flex flex-col justify-start items-start gap-2">
      {frequentlyAskedQuestions
        .filter((faq) => itemsToShow.includes(faq.id))
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
