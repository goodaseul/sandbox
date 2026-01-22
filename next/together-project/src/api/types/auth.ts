export interface SignInRequest {
  email: string;
  password: string;
}
export interface SignInResponse {
  token: string;
}
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
export interface SignUpResponse {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
