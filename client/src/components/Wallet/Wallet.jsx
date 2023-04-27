import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Wallet = () => {
  // const [balance, setBalance] = useState(0);
  // const getdata = async (res) => {
  //   try {
  //     const url = "http://localhost:8080/api/users";
  //     const data = await axios.get(url, res)
  //     setBalance(data.balance)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



  return (
    <>
      <div className={styles.main_container}>
        <div class={styles.table_container}>
          <h1>Balance : 0 </h1>
        </div>
        <div>
          <table>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Cr/Dr</th>
              <th>Balance</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
        <Link to="/"><button id={styles.btn1}>Back</button></Link>
      </div>
    </>
  )
}

export default Wallet
