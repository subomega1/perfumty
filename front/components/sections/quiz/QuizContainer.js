import Image from 'next/image';

export default function QuizContainer({ question, currentQuestion, totalQuestions, handleAnswer }) {
  return (
    <div className="bg-white rounded-2xl shadow-quiz p-8 max-w-3xl w-full dark:bg-gray-800">
      <div className="text-center mb-8">
        <div className="w-12 h-12 mx-auto mb-4 bg-quiz-purple-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-8 h-8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-quiz-gray-800 dark:text-cosmic-latte">Personality Scent Test</h1>
        <p className="text-quiz-gray-600 dark:text-gray-300 mt-2">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      <div className="mb-8">
        <p>{question.text}</p>
        <Image
          src={question.image}
          alt={question.text}
          width={672}
          height={256}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h2 className="text-xl font-semibold text-quiz-gray-800 dark:text-cosmic-latte mb-6">{question.text}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-quiz-purple-50 text-quiz-purple-700 p-4 rounded-xl text-left text-base hover:bg-quiz-purple-100 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      
    </div>
  );
}