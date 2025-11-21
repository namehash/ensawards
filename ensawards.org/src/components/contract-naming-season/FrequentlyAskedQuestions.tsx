import type { ReactElement } from "react";
import { FoldableCard } from "../atoms/cards/FoldableCard.tsx";

export interface FrequentlyAskedQuestion {
  question: string;
  answer: ReactElement;
}

const tertiaryLinkStyles =
  "text-black hover:underline hover:underline-offset-[25%] transition-all duration-200";
const textStyles = "text-base leading-normal font-normal text-muted-foreground";

// TODO: Populate the questions with actual data
const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: "What is $ENS?",
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
  }
];

export function FrequentlyAskedQuestions() {
  return (
    <div className="w-full min-[810px]:w-1/2 min-[810px]:min-w-1/2 h-fit flex flex-col justify-start items-start gap-2">
      {frequentlyAskedQuestions.map((faq, idx) => (
        <FoldableCard key={`FAQ-#${idx}`} header={faq.question}>
          {faq.answer}
        </FoldableCard>
      ))}
    </div>
  );
}
