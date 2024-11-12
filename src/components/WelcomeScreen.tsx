import React from 'react';
import { Brain, Clock, Award } from 'lucide-react';
import { Logo } from './Logo';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="card w-full max-w-2xl text-center">
      <div className="flex justify-center mb-8">
        <Logo className="w-48 h-12" />
      </div>

      <div className="inline-flex p-4 rounded-full bg-opacity-20 mb-6" style={{ backgroundColor: 'var(--primary)' }}>
        <Brain className="w-12 h-12" style={{ color: 'var(--primary)' }} />
      </div>

      <h1 className="text-3xl font-bold mb-4">
        Quiz Challenge
      </h1>

      <p className="text-gray-400 mb-8">
        Metti alla prova le tue conoscenze con il nostro quiz interattivo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 rounded-lg bg-opacity-10 bg-white">
          <Clock className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
          <h3 className="font-semibold mb-1">Domande a Tempo</h3>
          <p className="text-sm text-gray-400">30 secondi per domanda</p>
        </div>
        <div className="p-4 rounded-lg bg-opacity-10 bg-white">
          <Award className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
          <h3 className="font-semibold mb-1">Sistema a Punti</h3>
          <p className="text-sm text-gray-400">Guadagna punti per ogni risposta corretta</p>
        </div>
        <div className="p-4 rounded-lg bg-opacity-10 bg-white">
          <Brain className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--primary)' }} />
          <h3 className="font-semibold mb-1">Vari Argomenti</h3>
          <p className="text-sm text-gray-400">Domande sempre diverse</p>
        </div>
      </div>

      <button onClick={onStart} className="btn-primary">
        Inizia Quiz
      </button>
    </div>
  );
}