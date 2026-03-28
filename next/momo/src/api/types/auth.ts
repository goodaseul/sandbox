export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  name: string;
  company: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}
