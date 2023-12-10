import { create } from 'zustand';

type ChatMessage = {
  type: 'text' | 'form' |'info' |'form2';
  payload: string;
  direction?: 'right' | 'left';
};

interface ChatState {
  currentMessage: string;
  messages: ChatMessage[];
  socketCallback: null | Function;
}

interface ChatActions {
  setCurrentMessage: (message: string) => void;
  addMessage: (message: ChatMessage) => void;
  setSocketCallback: (fn: ChatState['socketCallback']) => void;
  sendMessage: (message: ChatMessage) => void;
}

export const useChatStore = create<ChatState & ChatActions>((set) => ({
  messages: [],
  currentMessage: '',
  socketCallback: null,
  addMessage: (message) => {
    set((state) => {
      return { messages: [...state.messages, message] };
    });
  },
  sendMessage: (message) => {
    const socketCallback = useChatStore.getState().socketCallback;

    if (!socketCallback) {
      return;
    }

    const payload = JSON.stringify(message);
    socketCallback(payload);
  },
  setCurrentMessage: (message) => set({ currentMessage: message }),
  setSocketCallback: (fn) => set({ socketCallback: fn }),
}));
