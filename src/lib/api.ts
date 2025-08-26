import type { CurrentUserResponseType } from "@/types/api.type";
import API from "./axios-client";

export const getCurrentUserQueryFn =
  async (): Promise<CurrentUserResponseType> => {
    const response = await API.get(`/user/current`);
    return response.data;
  };

export const registerMutationFn = async () => {};

export const loginMutationFn = async () => {};

export const logoutMutationFn = async () => {};
