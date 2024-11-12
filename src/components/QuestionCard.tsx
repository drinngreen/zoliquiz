import React from 'react';
import { Question } from '../types';
import { Timer, CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  timeRemaining: number;
  isRevealed?: boolean;
}

export function QuestionCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  timeRemaining,
  isRevealed 
}: QuestionCardProps) {
  return (
    <div className="card w-full max-w-2xl space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-400">
          Punti: {question.points}
        </span>
        <div className="flex items-center gap-2" style={{ color: 'var(--primary)' }}>
          <Timer size={20} />
          <span className="font-bold">{timeRemaining}s</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold">
        {question.question}
      </h2>

      <div className="grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = isRevealed && option === question.correctAnswer;
          const isWrong = isRevealed && isSelected && option !== question.correctAnswer;

          return (
            <button
              key={option}
              onClick={() => onSelectAnswer(option)}
              disabled={isRevealed}
              className={`
                p-4 rounded-lg text-left transition-all
                ${isSelected ? 'ring-2' : 'hover:bg-opacity-20'}
                ${isCorrect ? 'bg-green-900 bg-opacity-20 text-green-400' : ''}
                ${isWrong ? 'bg-red-900 bg-opacity-20 text-red-400' : ''}
                ${!isSelected && !isCorrect ? 'bg-opacity-10 bg-white' : ''}
                ${isSelected && !isRevealed ? 'ring-[color:var(--primary)]' : ''}
                relative
              `}
            >
              <div className="flex items-center gap-3">
                <span className="flex-1">{option}</span>
                {isRevealed && isCorrect && (
                  <CheckCircle className="text-green-400" size={20} />
                )}
                {isRevealed && isWrong && (
                  <XCircle className="text-red-400" size={20} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}