import { defineStore } from "pinia";

const initialState = "";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        initialState
    }),

    getters: {

    },

    actions: {
        login() {
            console.log(this)
        }
    }
})