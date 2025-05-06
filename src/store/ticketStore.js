// src/store/ticketStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useGenerateTicketID } from '../hooks/useGenerateTicketID';

const useTicketStore = create(
  persist(
    (set, get) => ({
      order: [], // used in OrderPage
      tickets: [], // used in TicketPage

      addToOrder: (event, quantity) => {
        const existing = get().order.find((item) => item.event.id === event.id);
        if (existing) {
          set({
            order: get().order.map((item) =>
              item.event.id === event.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            order: [...get().order, { event, quantity }],
          });
        }
      },

      updateQuantity: (eventId, newQty) => {
        set({
          order: get().order.map((item) =>
            item.event.id === eventId ? { ...item, quantity: newQty } : item
          ),
        });
      },

      removeFromOrder: (eventId) => {
        set({
          order: get().order.filter((item) => item.event.id !== eventId),
        });
      },

      generateTickets: () => {
        const generateTicketID = useGenerateTicketID(); // ✅ FIXED LINE
        const { order } = get();
        const tickets = [];

        order.forEach(({ event, quantity }) => {
          const section = "A"; // Static section
          const startSeat = Math.floor(Math.random() * 100) + 1;

          for (let i = 0; i < quantity; i++) {
            tickets.push({
              id: generateTicketID(), // ✅ Now works correctly
              event,
              section,
              seat: startSeat + i,
            });
          }
        });

        set({ tickets });
      },

      resetOrder: () => set({ order: [] }),
      resetTickets: () => set({ tickets: [] }),
    }),
    {
      name: 'ticket-store',
      getStorage: () => localStorage,
    }
  )
);

export default useTicketStore;
