import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableThead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={styles.tableItem}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
