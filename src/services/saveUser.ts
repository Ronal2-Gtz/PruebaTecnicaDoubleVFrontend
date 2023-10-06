import axios from "axios";
import { UseMutationResult, useMutation } from "react-query";
import { ErrorAttr, ResponseAttr } from "./types";

const PATH_LOCAL = "https://sydney-headless-chicken-monster-jedz.1.sg-1.fl0.io/user";

type UserData = {
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
};

export const useSaveUser = (): UseMutationResult<
  unknown,
  ErrorAttr,
  UserData
> => {
  return useMutation(async (userData) => {
    const { data } = await axios.post<ResponseAttr<UserData>>(
      `${PATH_LOCAL}`,
      userData
    );

    return data;
  });
};
