import { useRef, useState } from "react";
import styles from "./Filter.module.css";
import { useFilteredContext } from "../../context/MartyrContext";
import { Martyr } from "../types";
import Martyrs from "../Martyrs";

const Filter = ({ martyrs }: { martyrs: Martyr[] }) => {
  const [filter, setFilter] = useState<string>("All");
  const searchFilter = useRef<HTMLInputElement>(null);
  const filterMartyrContext = useFilteredContext();

  function onChangeHandler(gender?: string) {
    let filterResult = [...martyrs];

    if (gender && gender === "Children") {
      filterResult = filterResult.filter((martyr: Martyr) => martyr.age < 20);
    }

    if (gender && gender !== "Children" && gender !== "All") {
      filterResult = filterResult.filter(
        (martyr: Martyr) => martyr.gender.toLowerCase() === gender.toLowerCase()
      );
    }
    if (gender) setFilter(gender);

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
            onChange={() => onChangeHandler('All')}
            placeholder={'Enter Name or Family of Martyr...'}
          />
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <span
          className={filter === "All" ? styles.filter_selected : styles.filter}
          onClick={() => {
            onChangeHandler("All");
          }}
        >
          All
        </span>
        <span
          className={
            filter === "Female" ? styles.filter_selected : styles.filter
          }
          onClick={() => {
            onChangeHandler("Female");
          }}
        >
          Women
        </span>
        <span
          className={filter === "Male" ? styles.filter_selected : styles.filter}
          onClick={() => {
            onChangeHandler("Male");
          }}
        >
          Men
        </span>
        <span
          className={
            filter === "Children" ? styles.filter_selected : styles.filter
          }
          onClick={() => {
            onChangeHandler("Children");
          }}
        >
          Children
        </span>
      </div>
      <Martyrs martyrs={filterMartyrContext.FilteredMartyrs} />
    </div>
  );
};

export default Filter;
