import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr>
          <th className={css.tableCellHeader}>Type</th>
          <th className={css.tableCellHeader}>Amount</th>
          <th className={css.tableCellHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableCell}>{type}</td>
            <td className={css.tableCell}>{amount}</td>
            <td className={css.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
