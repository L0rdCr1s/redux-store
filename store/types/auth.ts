export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {
  [K in keyof T]: T[K];
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  mobile_number: Scalars['String'];
  profile_photo_path?: Maybe<Scalars['String']>;
};
export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  device_name: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'loginResponse';
  success?: Scalars['Boolean'];
  errors?: Array<Errors>;
  user?: User;
  token?: Scalars['String'];
  token_type?: Scalars['String'];
};

export type Errors = {
  __typename?: 'Errors';
  message?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};
