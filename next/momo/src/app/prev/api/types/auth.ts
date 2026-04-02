export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}
export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export interface UserResponse {
  teamId: number;
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
