export type LoginType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  message: string;
  user: {
    _id: string;
    currentWorkspace: string;
  };
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
};

export type UserType = {
  _id: string;
  name: string;
  email: string;
  profilePicture: string | null;
  isActive: true;
  lastLogin: null;
  createdAt: Date;
  updatedAt: Date;
  currentWorkspace: {
    _id: string;
    name: string;
    owner: string;
    inviteCode: string;
  };
};

export type UserResponseType = {
    message: string;
    user: UserType
  };