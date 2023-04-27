import React from 'react'
import styles from "./styles.module.css";
import {Link} from "react-router-dom";
const ListOfRequest = () => {
  return (
   <>
   <div className={styles.main_container}>
    <div class={styles.table_container}>
        <h1>Received Requests</h1>
    </div>
    <div>
    <table>
  <tr>
    <th>Date</th>
    <th>Amount</th>
    <th>Requested By</th>
    <th>Status</th>
    <th>Action</th>
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

export default ListOfRequest;
