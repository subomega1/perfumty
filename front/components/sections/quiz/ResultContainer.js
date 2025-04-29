export default function ResultContainer({ profile, resetQuiz }) {
    return (
      <div className="bg-white rounded-2xl shadow-quiz p-8 max-w-3xl w-full dark:bg-gray-800">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-plum rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="w-8 h-8"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-quiz-gray-800 dark:text-cosmic-latte">Your Perfect Scent Profile</h1>
          <h2 className="text-2xl text-quiz-purple-600 dark:text-lavender mt-4 mb-6">{profile.title}</h2>
          <p className="text-quiz-gray-600 dark:text-gray-300 mb-6">{profile.description}</p>
  
          <div className="bg-quiz-purple-50 rounded-xl p-6 mb-8 dark:bg-gray-700">
            <h3 className="text-lg font-semibold text-quiz-gray-800 dark:text-cosmic-latte mb-4">Key Notes</h3>
            <div className="grid grid-cols-2 gap-3">
              {profile.notes.map((note, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-sm text-quiz-purple-600 dark:bg-gray-600 dark:text-gray-200"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
  
          <button
            onClick={resetQuiz}
            className="bg-purple-300 text-black px-8 py-3 rounded-full hover:bg-purple-400 transition-colors dark:bg-lavender dark:hover:bg-coral"
          >
            Take Quiz Again
          </button>
          <button>
            <div className="bg-plum text-black px-8 py-3 rounded-full hover:bg-plum transition-colors dark:bg-lavender dark:hover:bg-coral mt-4">
              Customize Now
            </div>
          </button>
        </div>
      </div>
    );
  }