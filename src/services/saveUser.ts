import axios from "axios";
import { UseMutationResult, useMutation } from "react-query";
import { ErrorAttr, ResponseAttr } from "./types";

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
      "http://localhost:8080/user",
      userData
    );

    return data;
  });
};
