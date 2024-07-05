import React, { useState } from 'react';

const faq = () => {
	const faqs = [
        {
            question: "What is the minimum age requirements to rent a car in Dubai?",
            answer: "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver."
        },
        {
            question: "What do you need for a luxury car rental in Dubai?",
            answer: "Drivers shall be required to have a valid driver's license and Passport copy."
        },
        {
            question: "How much is the Insurance limit on luxury car rental Dubai?",
            answer: "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars."
        },
        {
            question: "What are the driving licenses that can be used in Arab countries?",
            answer: "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania."
        },
        {
            question: "Can anyone else drive the car I rent?",
            answer: "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport."
        }
    ];

	const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
	 <div className="bg-gray-900 text-white py-12 px-6" id="Faq">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">FAQ</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 pb-4">
                            <button
                                className="w-full text-left flex items-center justify-between focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="text-gray-100">{openIndex === index ? '-' : '+'}</span>
                            </button>
                            {openIndex === index && <p className="mt-2 text-gray-400">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default faq