import React, { useContext, useState } from "react";
import { Martyr } from "../pages/types";

const MartyrsContext = React.createContext<{
  Martyrs: Martyr[];
  fillOutMartyrs: (Martyr: Martyr[]) => void;
}>({
  Martyrs: [],
  fillOutMartyrs: ([]) => [],
});
const FilteredMartyrsContext = React.createContext<{
  FilteredMartyrs: Martyr[];
  fillOutFilteredMartyrs: (Martyr: Martyr[]) => void;
}>({
  FilteredMartyrs: [],
  fillOutFilteredMartyrs: ([]) => [],
});

const useMartyrContext = () => {
  return useContext(MartyrsContext);
};

const useFilteredContext = () => {
  return useContext(FilteredMartyrsContext);
};

const MartyrProvider = ({ children }: { children: JSX.Element }) => {
  const [Martyrs, setMartyrs] = useState<Martyr[]>([]);
  const [FilteredMartyrs, setFilteredMartyrs] = useState<Martyr[]>([]);

  const fillOutMartyrs = (MartyrsProp: Martyr[]) => {
    setMartyrs(MartyrsProp);
  };
  const fillOutFilteredMartyrs = (FilteredMartyrsProp: Martyr[]) => {
    setFilteredMartyrs(FilteredMartyrsProp);
  };

  return (
    <MartyrsContext.Provider value={{ Martyrs, fillOutMartyrs }}>
      <FilteredMartyrsContext.Provider
        value={{ FilteredMartyrs, fillOutFilteredMartyrs }}
      >
        {children}
      </FilteredMartyrsContext.Provider>
    </MartyrsContext.Provider>
  );
};

export { useMartyrContext, useFilteredContext, MartyrProvider };
