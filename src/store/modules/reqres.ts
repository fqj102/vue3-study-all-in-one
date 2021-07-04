// src/store/modules/reqres.ts

import { User, UserResponse } from "@/types/user";
// add
import { fetchUser } from "@/api/reqres";
import { AxiosResponse } from "axios";

export const namespaced = true;

interface State {
  user: User | null;
}

// user 데이터를 가지고 있는 Reqres 모듈
export const state: State = {
  user: null,
};

// add mutation
export const mutations = {
  // state의 user를 파라미터로 받아온 데이터로 갱신
  SET_USER(state: State, user: User): void {
    state.user = user;
  },
};

// add
export const actions = {
  async fetchUser({ commit }: any, id: number) {
    // id를 받는다.
    console.log("call fetchUser");
    await fetchUser(id) // api 통신
      .then((response: AxiosResponse<UserResponse>) => {
        const user: User = response.data.data;
        console.log(user);
        commit("SET_USER", user); // mutation 으로 state 갱신
      })
      .catch((e: Error) => {
        throw e;
      });
  },
};
