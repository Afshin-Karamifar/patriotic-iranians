type View = {
  id: string;
  quantity: number;
};

type Martyr = {
  id: string;
  firstName: String;
  lastName: String;
  gender: string;
  age: number;
  city: String;
  state: string;
  image: String;
  description: String;
};

type Filters = {
  mainFilter: String;
  subFilter: String;
};
export type { View, Martyr, Filters};
