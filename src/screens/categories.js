import React, { Fragment } from "react";
import { CATEGORIES } from "../data";
import { SubHeading, Square, Header } from "../components";

export default function Categories() {
  return (
    <Fragment>
      <div>
        {CATEGORIES.map((item) => {
          return (
            <Square
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              path={item.path}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
