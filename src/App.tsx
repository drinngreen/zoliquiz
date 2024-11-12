import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { GameState } from './types';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Logo } from './components/Logo';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const QUESTION_TIMER = 30;

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    status: 'idle',
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswers: {},
    timeRemaining: QUESTION_TIMER,
  });

  useEffect(() => {
    let timer: number;
    
    if (gameState.status === 'playing' && gameState.timeRemaining > 0) {
      timer = window.setInterval(() => {
        setGameState(prev => {
          if (prev.timeRemaining <= 1) {
            const nextIndex = prev.currentQuestionIndex + 1;
            if (nextIndex >= questions.length) {
              return { ...prev, status: 'finished', timeRemaining: 0 };
            }
            return {
              ...prev,
              currentQuestionIndex: nextIndex,
              timeRemaining: QUESTION_TIMER,
            };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [gameState.status, gameState.timeRemaining]);

  const handleStart = () => {
    setGameState({
      status: 'playing',
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswers: {},
      timeRemaining: QUESTION_TIMER,
    });
  };

  const handleAnswerSelect = (answer: string) => {
    setGameState(prev => {
      const currentQuestion = questions[prev.currentQuestionIndex];
      const isCorrect = answer === currentQuestion.correctAnswer;
      const newScore = isCorrect ? prev.score + currentQuestion.points : prev.score;
      
      return {
        ...prev,
        selectedAnswers: {
          ...prev.selectedAnswers,
          [prev.currentQuestionIndex]: answer
        },
        score: newScore,
      };
    });
  };

  const handleNextQuestion = () => {
    setGameState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      if (nextIndex >= questions.length) {
        return { ...prev, status: 'finished' };
      }
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        timeRemaining: QUESTION_TIMER,
      };
    });
  };

  const handlePrevQuestion = () => {
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
      timeRemaining: QUESTION_TIMER,
    }));
  };

  if (gameState.status === 'idle') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <WelcomeScreen onStart={handleStart} />
      </div>
    );
  }

  if (gameState.status === 'finished') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <ResultScreen
          questions={questions}
          selectedAnswers={gameState.selectedAnswers}
          score={gameState.score}
          onRestart={handleStart}
        />
      </div>
    );
  }

  const currentQuestion = questions[gameState.currentQuestionIndex];
  const selectedAnswer = gameState.selectedAnswers[gameState.currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-center mb-4">
          <Logo className="w-32 h-8" />
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span>Domanda {gameState.currentQuestionIndex + 1} di {questions.length}</span>
          <span>Punteggio: {gameState.score}</span>
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
        timeRemaining={gameState.timeRemaining}
        isRevealed={selectedAnswer !== undefined}
      />

      <div className="w-full max-w-2xl mt-6 flex justify-between">
        <button
          onClick={handlePrevQuestion}
          disabled={gameState.currentQuestionIndex === 0}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-opacity-10 bg-white text-gray-300 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
          Precedente
        </button>

        {selectedAnswer && (
          <button
            onClick={handleNextQuestion}
            className="btn-primary inline-flex items-center"
          >
            {gameState.currentQuestionIndex === questions.length - 1 ? 'Termina' : 'Prossima'}
            <ChevronRight size={20} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}