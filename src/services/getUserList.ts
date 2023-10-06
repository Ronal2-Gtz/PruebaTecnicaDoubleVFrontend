import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { type ResponseAttr, type ErrorAttr } from "./types";

const PATH = "https://api.github.com/search";

export type User = {
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
};

type ListResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<User>;
};

export const useUserList = (
  user: string
): UseQueryResult<ListResponse, ErrorAttr> => {
  return useQuery(
    "userList",
    async () => {
      const { data } = await axios.get<ResponseAttr<ListResponse>>(
        `${PATH}/users?q=${user}`
      );

      return data;
    },
    {
      enabled: false,
    }
  );
};
