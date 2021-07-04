// src/api/reqres.ts
import axios, { AxiosPromise } from "axios";
import { UserResponse } from "@/types/user";

// reqres 사이트와 통신에 사용할 axios 객체 하나만들어두고 재사용하기
const reqresApi = axios.create({
  baseURL: "https://reqres.in", // Url
  timeout: 5000, // timeout 5초
});

// userId를 파라미터로 받아서 API 통신으로 user 데이터 가져오기
export function fetchUser(id: number): AxiosPromise<UserResponse> {
  return reqresApi.get(`/api/users/${id}`);
}
