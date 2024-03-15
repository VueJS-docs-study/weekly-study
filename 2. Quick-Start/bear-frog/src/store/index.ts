import { defineStore } from "pinia";
import { reactive } from "vue";
import type { User, UserStore } from "@/types/store";

export const useUserStore = defineStore("user", () => {
  const user: User = reactive({
    id: "",
  });

  const initUserStore = (_user: User) => {
    user.id = _user.id;
  };

  return { user, initUserStore } as UserStore;
});
