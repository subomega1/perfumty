"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import QuizContainer from '@/components/sections/quiz/QuizContainer';
import ResultContainer from '@/components/sections/quiz/ResultContainer';
import { questions, scentProfiles } from '../../../constants/quiz';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

 
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const determineProfile = () => {
    const scores = {
      romantic: answers.filter((a) =>
        ['Reading a book', 'Spring', 'Sunset', 'Tea', 'Beach paradise', 'Romantic'].includes(a)
      ).length,
      fresh: answers.filter((a) =>
        ['Going on an adventure', 'Summer', 'Dawn', 'Fresh juice', 'Mountain retreat', 'Energetic'].includes(a)
      ).length,
      woody: answers.filter((a) =>
        ['Relaxing at home', 'Fall', 'Midday', 'Coffee', 'Forest cabin', 'Peaceful'].includes(a)
      ).length,
      oriental: answers.filter((a) =>
        ['Party with friends', 'Winter', 'Night', 'Soda', 'City exploration', 'Mysterious'].includes(a)
      ).length,
    };
    return Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-quiz-purple-50 flex items-center justify-center p-4 dark:from-gray-800 dark:to-gray-900">
      <Head>
        <title>Personality Scent Test | Perfumty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      {showResult ? (
        <ResultContainer
          profile={scentProfiles[determineProfile()]}
          resetQuiz={resetQuiz}
        />
      ) : (
        <QuizContainer
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}