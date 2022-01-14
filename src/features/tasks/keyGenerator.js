import { nanoid } from "@reduxjs/toolkit";

const getKey = () => {
  let key = nanoid();

  return key;
};

export default getKey;
