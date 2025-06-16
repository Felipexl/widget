// src/App.tsx

import { useEffect } from 'react';
import '@n8n/chat/style.css'; // Importa o CSS do chat
import { createChat } from '@n8n/chat';

function App() {
  useEffect(() => {
    // Esta função inicializa o chat
    createChat({
      webhookUrl: 'https://n8n-e951.onrender.com/webhook/f75f0084-5926-431b-ac76-990cd79082c8/chat',
      i18n: {
        en: {
          title: 'Olá! 👋',
          subtitle: 'Inicie uma conversa. Estamos aqui para ajudar.',
          getStarted: 'Nova Conversa',
          inputPlaceholder: 'Digite sua pergunta...',
          footer: '', 
          closeButtonTooltip: 'Fechar o chat', 
        },
      },
    });
  }, []); // O array vazio [] garante que o código rode apenas uma vez

  // O componente App não precisa retornar nada visível,
  // pois o chat será injetado na página automaticamente.
  return null; // Retornar null é mais limpo que um <div> vazio
}

export default App;