import type { User as ViewUser } from "@/types/views/index";

export type User = Omit<ViewUser, "password">;

export interface UserStore {
  user: User;
  initUserStore: (_user: User) => void;
}
