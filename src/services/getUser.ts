import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { type ResponseAttr, type ErrorAttr } from "./types";

const PATH = "https://api.github.com/users";
const PATH_LOCAL = "https://sydney-headless-chicken-monster-jedz.1.sg-1.fl0.io/user";

export type UserResponse = {
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  id: string;
  avatar_url: string;
};

export const useGetUser = (
  user?: string
): UseQueryResult<UserResponse, ErrorAttr> => {
  return useQuery(
    ["getUser", user],
    async () => {
      const { data } = await axios.get<ResponseAttr<UserResponse>>(
        `${PATH}/${user}`
      );

      return data;
    },
    {
      enabled: !!user,
    }
  );
};

type verifyUserResponse = {
  isFavorite: boolean;
};

export const useVerifyUser = (
  user?: string
): UseQueryResult<verifyUserResponse, ErrorAttr> => {
  return useQuery(
    ["verifyUser", user],
    async () => {
      const { data } = await axios.get<ResponseAttr<verifyUserResponse>>(
        `${PATH_LOCAL}/${user}`
      );

      return data;
    },
    {
      enabled: !!user,
    }
  );
};
