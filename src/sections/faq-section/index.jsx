"use client";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { homePageMocks } from "@/mocks/home-page";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function FaqSection({ otherClasses }) {
  const { faqQuestions } = homePageMocks;

  const faqSectionClasses = classnames(otherClasses, "mx-6 my-14 lg:my-20");
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={faqSectionClasses} data-testid="faq-section">
      <div className="max-w-1120 mx-auto">
        <Heading title="Frequently Asked" subTitle="Questions" />

        <div className="flex lg:flex-row flex-col items-start justify-between gap-12 mt-10 lg:mt-14 mx-auto">
          <div className="relative border border-black/10 rounded-xl overflex-hidden w-full sm:w-3/4 lg:w-2/5">
            <Image
              src="/svg/ask-question-background.svg"
              width={424}
              height={428}
              alt="ask question logo"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative px-8 py-20 flex items-center justify-center flex-col gap-3">
              <Image
                src="/svg/logo.svg"
                width={104}
                height={104}
                alt="ask question logo"
                className=""
              />
              <h3 className="font-semibold text-30 font-instrument-sans">
                Ask a Question
              </h3>
              <p className="text-normal font-instrument-sans  text-xl text-black/50 text-center">
                Here's what some of my satisfied clients have to say about my
                work{" "}
              </p>
              <Button
                label="Ask a Question"
                variant="primary"
                size="small"
                otherClasses="mt-2"
              />
            </div>
          </div>

          <div className="space-y-6 w-full lg:w-3/5">
            {faqQuestions?.map(({ question, answer, id }) => {
              const isActive = activeId === id;
              return (
                <div
                  key={id}
                  className="rounded-2xl border border-black/10 bg-gray-300"
                >
                  <button
                    onClick={() => setActiveId(isActive ? null : id)}
                    className={
                      "flex justify-between items-center w-full text-xl font-medium text-black font-instrument-sans px-8 p-8"
                    }
                  >
                    <span>{question}</span>
                    {isActive ? (
                      <Image
                        src="/svg/open.svg"
                        width={24}
                        height={24}
                        alt="ask question logo"
                        className="w-6 h-6"
                      />
                    ) : (
                      <Image
                        src="/svg/close.svg"
                        width={24}
                        height={24}
                        alt="ask question logo"
                        className="w-6 h-6"
                      />
                    )}
                  </button>

                  <p
                    className={classnames(
                      "text-gray-900 font-medium text-base font-instrument-sans",
                      isActive ? "block px-8 pb-8" : "hidden",
                    )}
                  >
                    {answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
