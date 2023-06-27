export type APIResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

export type User = {
  id: string;
  email: string;
};

export type Profile = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
};
