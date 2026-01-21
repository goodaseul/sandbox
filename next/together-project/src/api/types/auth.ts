export interface signInRequest {
  email: string;
  password: string;
}
export interface signInResponse {
  token: string;
}
export interface signUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
export interface signUpResponse {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
