import { UserApi } from "../api/user.api";

export interface UserRow {
  id: number;
  name: string;
  email: string;
  street: string;
  phone: string;
  company: string;
}

export function mapUserToRow(user: UserApi): UserRow {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    street: user.address.street,
    phone: user.phone,
    company: user.company.name,
  };
}