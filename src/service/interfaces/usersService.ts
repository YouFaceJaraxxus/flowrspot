import IUser from '../../models/user/user';


interface IGetCurrentUserResponse{
  user: IUser;
}

interface ILogin{
  email: string;
  password: string;
}

interface ISignup{
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  password: string;
}

interface ILoginResponse{
  auth_token: string;
}

interface ISignupResponse{
  auth_token: string;
}

class LoginError extends Error{
  constructor(message: string){
    super();
    this.message = message;
  }
  message: string;
}

class SignupError extends Error{
  constructor(message: string){
    super();
    this.message = message;
  }
  message: string;
}

export default interface IUsersService {
  getCurrentUserInfo: (authToken: string) => Promise<IGetCurrentUserResponse>;
  login:(data: ILogin) => Promise<ILoginResponse>;
  signup:(data: ISignup) => Promise<ISignupResponse>;
};

export {
  LoginError,
  SignupError,
}

export type {
  IGetCurrentUserResponse,
  ILogin,
  ISignup,
  ILoginResponse,
  ISignupResponse,
}