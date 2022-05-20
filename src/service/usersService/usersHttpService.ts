import { API_BASE_URL } from '../../config/config';
import HttpService from '../httpService';
import { IAxiosService } from '../interfaces/service';
import IUsersService, { IGetCurrentUserResponse, ILogin, ILoginResponse, ISignup, ISignupResponse } from '../interfaces/usersService';

const USERS_BASE_URL = 'users';
const CURRENT_USER_ENDPOINT = '/me';
const LOGIN_ENDPOINT = '/login';
const SIGNUP_ENDPOINT = '/register';

class UsersHttpService implements IUsersService {
  constructor(baseUrl?: string) {
    this.service = new HttpService(`${baseUrl || API_BASE_URL}${USERS_BASE_URL}`);
  }
  service: IAxiosService;
  getCurrentUserInfo = (): Promise<IGetCurrentUserResponse> => this.service.get(CURRENT_USER_ENDPOINT).then((response) => response.data);
  login = (data: ILogin): Promise<ILoginResponse> =>
    this.service.post(LOGIN_ENDPOINT, data, {
      axiosConfig: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }).then((response) => response.data);
  signup = (data: ISignup): Promise<ISignupResponse> =>
    this.service.post(SIGNUP_ENDPOINT, data, {
      axiosConfig: {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    }).then((response) => response.data);
}

const usersHttpService = new UsersHttpService();

export {
  usersHttpService,
};