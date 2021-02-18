import {LoginInput, LoginResponse} from '@store/types/auth';
import {api} from '@api/Client';

export function loginUser(input: LoginInput) {
  return api<LoginResponse>({
    query: '',
    variables: {input: input},
  }).then((response) => response.data);
}
