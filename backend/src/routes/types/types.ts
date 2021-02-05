export type GetOutput = {
  Item: Users;
};

export type Users = {
  id: string;
  key: string;
  username: string;
  password: string;
  xtoken: string;
  telegramId?: string;
};

export type UserMeta = {
  username: string;
};

export type StatementRequest = {
  account: 0 | string;
  from: number;
  to?: number;
  previous: boolean;
};

export type Category = {
  mcc: {
    numbers: number[];
    ranges: number[][];
  };
  category: string;
  id: number;
};

type Month = 'previousMonth' | 'currentMonth';
export type LimitCategory = {
  category: string;
  id: number;
} & {
  [k in Month]?: number;
};

export type Payment = {
  category: string;
  categoryId: number;
  description: string;
  amount: number;
  time: number;
};

export type MonoClientInfo = {
  clientId: string;
  name: string;
  webHookUrl: string;
  accounts: MonoAccount[];
};

type MonoAccount = {
  id: string;
  currencyCode: number;
  cashbackType: string;
  balance: number;
  creditLimit: number;
  maskedPan: string[];
  type: string;
  iban: string;
};

export type ClientInfo = {
  name: string;
  webHookUrl: string;
  accounts: Account[];
};

type Account = {
  id: string;
  currencyCode: number;
  balance: number;
  creditLimit: number;
  type: string;
};

export type MonoStatements = MonoStatement[];

export type MonoStatement = {
  id: string;
  time: number;
  description: string;
  mcc: number;
  amount: number;
  operationAmount: number;
  currencyCode: number;
  commissionRate: number;
  cashbackAmount: number;
  balance: number;
  hold: boolean;
};
