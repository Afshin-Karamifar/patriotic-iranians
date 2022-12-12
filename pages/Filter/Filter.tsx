import { useRef, useState } from "react";
import styles from "./Filter.module.css";
import { useFilteredContext } from "../../context/MartyrContext";
import { Martyr, Filters } from "../../types/types";
import Martyrs from "../Martyrs/Martyrs";

const Filter = ({ martyrs }: { martyrs: Martyr[] }) => {
  const [filter, setFilter] = useState<Filters>({
    mainFilter: "",
    subFilter: "All",
  });
  const searchFilter = useRef<HTMLInputElement>(null);
  const filterMartyrContext = useFilteredContext();
  const LIVES = filterMartyrContext.FilteredMartyrs.length;

  function onChangeHandler(_filters: Filters) {
    let filterResult = [...martyrs];

    if (_filters.subFilter === "Children") {
      filterResult = filterResult.filter((martyr: Martyr) => martyr.age <= 18);
    }

    if (_filters.subFilter !== "Children" && _filters.subFilter !== "All") {
      filterResult = filterResult.filter(
        (martyr: Martyr) =>
          martyr.gender.toLowerCase() === _filters.subFilter.toLowerCase()
      );
    }

    if (_filters.mainFilter !== "") {
      filterResult = filterResult.filter(
        (martyr: Martyr) =>
          _filters.mainFilter.toLowerCase() === martyr.state.toLowerCase()
      );
    }

    setFilter(_filters);

    filterMartyrContext.fillOutFilteredMartyrs(
      filterResult.filter(
        (martyr: Martyr) =>
          `${martyr.firstName} ${martyr.lastName}`
            .toLowerCase()
            .indexOf(searchFilter.current?.value.toLowerCase()!) >= 0
      )
    );
  }

  return (
    <div>
      <div className={styles.firstContainer}>
        <div className={styles.inputContainer}>
          <input
            ref={searchFilter}
            className={styles.search}
            onChange={() => onChangeHandler(filter)}
            placeholder={"Enter name or surname . . ."}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
          ></i>
        </div>
      </div>
      <div className={styles.secondContainer_filter}>
        <span
          className={
            filter.mainFilter === "Martyred"
              ? styles.main_filter_selected
              : styles.main_filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ mainFilter: "Martyred" } });
          }}
        >
          Murdered
        </span>
        <span
          className={
            filter.mainFilter === "Executed"
              ? styles.main_filter_selected
              : styles.main_filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ mainFilter: "Executed" } });
          }}
        >
          Executed
        </span>
        <span
          className={
            filter.mainFilter === "Execution_List"
              ? styles.main_filter_selected
              : styles.main_filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ mainFilter: "Execution_List" } });
          }}
        >
          In list to be Execution
        </span>
      </div>
      <div className={styles.secondContainer}>
        <span
          className={
            filter.subFilter === "All" ? styles.filter_selected : styles.filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ subFilter: "All" } });
          }}
        >
          All
        </span>
        <span
          className={
            filter.subFilter === "Female"
              ? styles.filter_selected
              : styles.filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ subFilter: "Female" } });
          }}
        >
          Women
        </span>
        <span
          className={
            filter.subFilter === "Male" ? styles.filter_selected : styles.filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ subFilter: "Male" } });
          }}
        >
          Men
        </span>
        <span
          className={
            filter.subFilter === "Children"
              ? styles.filter_selected
              : styles.filter
          }
          onClick={() => {
            onChangeHandler({ ...filter, ...{ subFilter: "Children" } });
          }}
        >
          Children
        </span>
      </div>
      {LIVES > 0 && (
        <div className={styles.third_container}>
          <p className={styles.just_number}>
            It is not just a number,&nbsp;&nbsp;
            <strong>
              {LIVES} {LIVES > 1 ? "Lives" : "Live"}
            </strong>
          </p>
        </div>
      )}
      <Martyrs martyrs={filterMartyrContext.FilteredMartyrs} />
    </div>
  );
};

export default Filter;
