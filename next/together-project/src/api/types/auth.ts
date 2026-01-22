export interface SignInRequest {
  email: string;
  password: string;
}
export interface SignInResponse {
  token: string;
  user?: {
    id: number;
    email: string;
    name: string;
    companyName: string;
  };
}
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
export interface SignUpResponse {
  id: number;
  email: string;
  name: string;
  companyName: string;
  token?: string;
  createdAt: string;
}
