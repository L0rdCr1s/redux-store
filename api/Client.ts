import axios from 'axios';
import gql from 'graphql-tag';
import {print} from 'graphql';

export const API_URL = 'http://192.168.0.153:8020';
export const http = axios.create({baseURL: API_URL, withCredentials: true});

interface queryValues {
  query: string;
  variables?: any;
}

export function api<T>({query, variables}: queryValues) {
  const baseURL = '/graphql';

  return http
    .post<T>(baseURL, {
      query: print(
        gql`
          ${query}
        `,
      ),
      variables: variables,
    })
    .then((response) => response);
}
