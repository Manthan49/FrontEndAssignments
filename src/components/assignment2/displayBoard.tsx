import React, { useEffect, useState } from "react";

const DisplayBoard = () => {
  const [rates, setRates] = useState<any>();
  const [currency, setCurrency] = useState("INR");

  var myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-ivftl9zco13z-io");
  myHeaders.append("Content-Type", "application/json");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getRates();
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, []);

  const getRates = async () => {
    try {
      let resposne = await fetch(
        `https://www.goldapi.io/api/XAU/${currency}/`,
        {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        }
      );
      const myResponse = await resposne.json();
      // console.log(myResponse, "These are the rates");
      setRates(myResponse);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(rates, "This my data");

  const changeHandler = (e: any) => {
    const x = e.target.value;
    setCurrency(x);
  };

  console.log(currency);
  const clickHandler = () => {
    getRates();
  };

  return (
    <div>
      <h1>GOLD COMMODITY RATE PROVIDER</h1>
      <label>Currency : </label>
      <input placeholder="INR" onChange={changeHandler} name="currency" /> By
      default it is INR you can use USD, EURO, JPY...etc etc
      <button style={{ border: "1px solid black" }} onClick={clickHandler}>
        Get data
      </button>
      <table>
        <thead>
          <tr>
            <th>---Currency---</th>
            <th>---Price---</th>
            <th>---Pricegram18K--- </th>
            <th>---Price gram 24K---</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rates?.currency}</td>
            <td>{rates?.price}</td>
            <td>{rates?.price_gram_18k}</td>
            <td>{rates?.price_gram_24k}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBoard;
