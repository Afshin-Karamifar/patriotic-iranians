type View = {
  id: string;
  quantity: number;
};

type Martyr = {
  firstName: String;
  lastName: String;
  gender: string;
  age: number;
  city: String;
  state: string;
  image: String;
};

type Filters = {
  mainFilter: String;
  subFilter: String;
};
export type { View, Martyr, Filters};
