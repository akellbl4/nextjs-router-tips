import { useState } from "react";
import Router, { useRouter } from "lib/router";

import styles from "./Params.module.css";

const PARAMS_LIST = [
  "Orage",
  "Apple",
  "Banana",
  "Dragon Fruit",
  "Pineapple",
  "Strawberry",
  "Raspberry",
];

export function Params() {
  const { pathname, query } = useRouter();
  const queryParams =
    typeof query.params === "string" ? [query.params] : query.params || [];

  function handleSubmit(evt) {
    const params = new FormData(evt.currentTarget).getAll("fruits");

    evt.preventDefault();
    Router.push({ pathname, query: { ...query, params } }, { shallow: true });
  }

  function handleReset() {
    Router.push(pathname, { shallow: true });
  }

  return (
    <div className={styles.root}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h3>Params</h3>
        {PARAMS_LIST.map((title) => {
          const id = title.replace(/\s/g, "-").toLowerCase();

          return (
            <div key={id}>
              <input type="checkbox" name="fruits" id={id} value={id} />
              <label htmlFor={id}>{title}</label>
            </div>
          );
        })}
        <div className={styles.formActions}>
          <button type="submit">Apply</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <article className={styles.content}>
        <h3>Chosen params</h3>
        {queryParams.length > 0 ? (
          <ul className="list">
            {queryParams.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        ) : (
          <span className={styles.emptyState}>No params</span>
        )}
      </article>
    </div>
  );
}
