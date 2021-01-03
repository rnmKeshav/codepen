/**
 * This file's extension is '.js'. This is done to test, `babel-loader` loader definition via webpack.config.js.
 * Even if this file contains jsx, it gets compiled by bebel-loader comfortably without specifying `extensions` in webpack config.
 * We can see, `Button` will not compile as we have `Button.jsx` instead of `Button.js`.
 * This gets fixed by specifying  extensions: ['.jsx', '.js']
 */

import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
    Hi I am react component
    <Button />
    </>
  );
}

export default Main;
