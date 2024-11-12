import { Question } from '../types';

const allQuestions: Question[] = [
  {
    question: "Quale trattato segreto fu firmato dall'Italia nel 1915 prima di entrare nella Prima Guerra Mondiale?",
    options: ["Trattato di Londra", "Patto di Roma", "Accordo di Vienna", "Trattato di Versailles"],
    correctAnswer: "Trattato di Londra",
    points: 10
  },
  {
    question: "Chi fu il primo re dell'Italia unita?",
    options: ["Vittorio Emanuele II", "Vittorio Emanuele I", "Carlo Alberto", "Umberto I"],
    correctAnswer: "Vittorio Emanuele II",
    points: 10
  },
  {
    question: "Quale filosofo italiano del XVI secolo fu arso vivo per eresia?",
    options: ["Giordano Bruno", "Tommaso Campanella", "Niccolò Machiavelli", "Marsilio Ficino"],
    correctAnswer: "Giordano Bruno",
    points: 10
  },
  {
    question: "Quale importante scoperta scientifica è attribuita a Enrico Fermi?",
    options: [
      "La radioattività artificiale",
      "La fissione nucleare controllata",
      "La teoria della relatività",
      "Il bosone di Higgs"
    ],
    correctAnswer: "La fissione nucleare controllata",
    points: 10
  },
  {
    question: "Quale importante battaglia navale del 1866 vide la sconfitta della flotta italiana?",
    options: ["Battaglia di Lissa", "Battaglia di Lepanto", "Battaglia di Trafalgar", "Battaglia di Salamina"],
    correctAnswer: "Battaglia di Lissa",
    points: 10
  },
  {
    question: "Chi scrisse il trattato 'Dei delitti e delle pene', fondamentale per il diritto penale moderno?",
    options: ["Cesare Beccaria", "Francesco Carrara", "Enrico Ferri", "Gaetano Filangieri"],
    correctAnswer: "Cesare Beccaria",
    points: 10
  },
  {
    question: "Quale importante scoperta archeologica fu fatta a Pompei nel 1959?",
    options: [
      "La Villa dei Misteri",
      "Il Termopolio della Regio V",
      "La Casa del Menandro",
      "Il Calco della Donna Velata"
    ],
    correctAnswer: "La Villa dei Misteri",
    points: 10
  },
  {
    question: "Chi compose l'opera 'Norma', considerata il capolavoro del bel canto?",
    options: ["Vincenzo Bellini", "Gioacchino Rossini", "Giuseppe Verdi", "Gaetano Donizetti"],
    correctAnswer: "Vincenzo Bellini",
    points: 10
  },
  {
    question: "Quale scienziato italiano vinse il Nobel per la Fisica nel 1909 per gli studi sulla radioattività?",
    options: ["Guglielmo Marconi", "Enrico Fermi", "Carlo Rubbia", "Ettore Majorana"],
    correctAnswer: "Guglielmo Marconi",
    points: 10
  },
  {
    question: "Quale importante battaglia del Risorgimento fu combattuta nel 1860 sul fiume Volturno?",
    options: [
      "Battaglia del Volturno",
      "Battaglia di Custoza",
      "Battaglia di San Martino",
      "Battaglia di Calatafimi"
    ],
    correctAnswer: "Battaglia del Volturno",
    points: 10
  }
];

// Function to get 5 random questions
function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const questions = getRandomQuestions();