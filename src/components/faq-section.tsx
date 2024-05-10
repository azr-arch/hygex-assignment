import { Accordion } from "./accordion";

const faqs = [
    {
        question: "Can education flashcards be used for all age groups?",
        answer: "Yes, education flashcards can be used for all age groups. They are a versatile learning strategy that benefits students of all ages[^1^][10]. They can be different colors, or kept simple, and can be especially useful for students who respond to learning through visual, tactile, or kinesthetic means[^1^][10].",
    },
    {
        question: "How do education flashcards work?",
        answer: 'Flashcards work by leveraging the power of active recall, metacognition, and spaced repetition[^2^][2]. When you look at the front "question" side of a flashcard and think of the answer, you are engaging a mental faculty known as active recall[^2^][2]. After you flip over a flashcard to see the answer, you compare that answer to the one you had in your head. This is called metacognition[^2^][2]. Flashcards also allow you to repeat the act of learning and memorizing until you are an expert on the information[^3^][1].',
    },
    {
        question: "Can education flashcards be used for test preparation?",
        answer: "Absolutely, flashcards are a valuable and effective tool for test preparation[^4^][8]. They can enhance memory retention, active recall, and overall understanding of important concepts[^4^][8]. They are particularly useful for reviewing material before exams or tests[^5^][7].",
    },
];

export const FAQ = () => {
    return (
        <section className="pb-[100px]">
            <h2 className="bg-gradient-to-b from-gradient_start to-gradient_stop text-transparent bg-clip-text font-bold tracking-wide text-[48px]">
                FAQ
            </h2>

            <div className="w-full space-y-8 mt-[48px]">
                {faqs.map((faq, idx) => (
                    <Accordion key={idx} title={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};
