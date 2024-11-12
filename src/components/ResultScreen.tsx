import React from 'react';
import { Trophy, RotateCcw } from 'lucide-react';
import { Question } from '../types';

interface ResultScreenProps {
  questions: Question[];
  selectedAnswers: Record<number, string>;
  score: number;
  onRestart: () => void;
}

export function ResultScreen({ questions, selectedAnswers, score, onRestart }: ResultScreenProps) {
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
  const percentage = Math.round((score / totalPoints) * 100);

  const handleNewGame = () => {
    window.location.reload();
  };

  return (
    <div className="card w-full max-w-2xl">
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-opacity-20 mb-6" style={{ backgroundColor: 'var(--primary)' }}>
          <Trophy className="w-12 h-12" style={{ color: 'var(--primary)' }} />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Quiz Completato!
        </h2>
        
        <div className="text-5xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
          {percentage}%
        </div>
        
        <p className="text-gray-400 mb-8">
          Hai totalizzato {score} su {totalPoints} punti
        </p>

        <div className="space-y-4 mb-8">
          {questions.map((question, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg text-left ${
                selectedAnswers[index] === question.correctAnswer
                  ? 'bg-green-900 bg-opacity-20 border border-green-900'
                  : 'bg-red-900 bg-opacity-20 border border-red-900'
              }`}
            >
              <p className="font-medium mb-2">{question.question}</p>
              <p className="text-sm text-gray-400">
                La tua risposta: <span className="font-medium text-white">{selectedAnswers[index]}</span>
              </p>
              <p className="text-sm text-gray-400">
                Risposta corretta: <span className="font-medium text-white">{question.correctAnswer}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleNewGame}
            className="btn-primary"
          >
            <RotateCcw className="w-5 h-5 mr-2 inline-block" />
            Nuova Partita
          </button>
        </div>
      </div>
    </div>
  );
}