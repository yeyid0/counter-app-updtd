import React, { useState } from "react";
import useStyles from "./counterstyle.js";
import Input from "./input.js";

const Counter = () => {
  const [sonuc, setSonuc] = useState(0);
  const [value, setValue] = useState(1);

  const classes = useStyles();

  const arttir = () => {
    setSonuc(sonuc + Number(value));
  };

  const azalt = () => {
    setSonuc(sonuc - Number(value));
  };

  const sifirla = () => {
    setSonuc(0);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.App}>
      <h1 className={classes.myH1}>{sonuc}</h1>
      <Input value={value} onChange={handleInputChange} />
      <div className={classes.myButtons}>
        <button className={classes.myButton} onClick={arttir}>Arttır</button>
        <button className={classes.myButton} onClick={azalt}>Azalt</button>
        <button className={classes.myButton} onClick={sifirla}>0</button>
      </div>
    </div>
  );
};

export default Counter;
