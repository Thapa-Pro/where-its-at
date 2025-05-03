// src/store/ticketStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTicketStore = create(
  persist(
    (set, get) => ({
      order: [],

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

      resetOrder: () => set({ order: [] }),
    }),
    {
      name: 'ticket-store', // name for localStorage
      getStorage: () => localStorage,
    }
  )
);

export default useTicketStore;
