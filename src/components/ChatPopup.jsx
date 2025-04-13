import { useState } from 'react';

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
if(open==true){
   return (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto text-sm" id="chat-log">
            <div><b>Bot:</b> Hello! How can I help?</div>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border-t px-4 py-2 text-sm focus:outline-none"
          />
        </div>
      )

    
}
else{
    return (
        <div>
          <button
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            💬 Chat
          </button>
    
          
        </div>
      );
}


 
}
