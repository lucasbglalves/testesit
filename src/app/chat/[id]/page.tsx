'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { ArrowLeftIcon, PaperAirplaneIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Simula mensagens do chat (em um MVP real, isso viria de uma API)
const initialMessages = [
  {
    id: 1,
    text: 'Olá! Como posso ajudar você hoje?',
    sender: 'teacher',
    time: '10:30'
  },
  {
    id: 2,
    text: 'Gostaria de tirar algumas dúvidas sobre o curso',
    sender: 'student',
    time: '10:31'
  }
];

// Dados do professor (em um MVP real, isso viria de uma API)
const teachers = {
  '1': {
    name: 'Ana Silva',
    specialty: 'Oratória',
    status: 'Online'
  },
  '2': {
    name: 'Carlos Santos',
    specialty: 'Expressão Corporal',
    status: 'Offline'
  },
  '3': {
    name: 'Maria Costa',
    specialty: 'Comunicação Digital',
    status: 'Online'
  }
};

export default function Chat({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const teacher = teachers[params.id as keyof typeof teachers];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        sender: 'student',
        time: new Date().toLocaleTimeString().slice(0, 5)
      }
    ]);
    setNewMessage('');
  };

  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <div className="container py-8 mt-16">
        {/* Cabeçalho do Chat */}
        <div className="bg-black/40 rounded-t-lg border border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 text-white" />
              </button>
              <div>
                <h2 className="text-white font-medium">{teacher.name}</h2>
                <p className="text-white/70 text-sm">{teacher.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-[#FD6F2F]/20 hover:bg-[#FD6F2F]/30 transition-colors">
                <PhoneIcon className="w-5 h-5 text-[#FD6F2F]" />
              </button>
              <button className="p-2 rounded-full bg-[#FD6F2F]/20 hover:bg-[#FD6F2F]/30 transition-colors">
                <VideoCameraIcon className="w-5 h-5 text-[#FD6F2F]" />
              </button>
            </div>
          </div>
        </div>

        {/* Área de Mensagens */}
        <div className="bg-black/30 h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === 'student'
                    ? 'bg-[#FD6F2F] text-white'
                    : 'bg-white/10 text-white'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Área de Input */}
        <form onSubmit={handleSendMessage} className="bg-black/40 rounded-b-lg border border-white/10 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD6F2F]/50"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-[#FD6F2F] hover:bg-[#e65a1a] transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 