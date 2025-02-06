import React from "react";

function Faq() {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase."
        },
        {
            question: "Do you offer technical support?",
            answer: "Yes, we offer 24/7 technical support."
        },
        {
            question: "Where are you located?",
            answer: "We are located in New York City."
        }
    ];

    return (
        <>
            <h3>Frequently Asked Questions</h3>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Faq;