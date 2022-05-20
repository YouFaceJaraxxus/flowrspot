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

export default interface IUsersService {
  getCurrentUserInfo: () => Promise<IGetCurrentUserResponse>;
  login:(data: ILogin) => Promise<ILoginResponse>;
  signup:(data: ISignup) => Promise<ISignupResponse>;
};


export type {
  IGetCurrentUserResponse,
  ILogin,
  ISignup,
  ILoginResponse,
  ISignupResponse,
}