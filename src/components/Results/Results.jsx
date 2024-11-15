import { useContext } from "react";
import { FormContext } from "../Context/FormContext.jsx";
import styles from "../Results/Results.module.css";

export function Results() {
  const {
    selectedOption,
    originalTotalInterestPayment,
    monthlyPaymentAmount,
    totalCost,
  } = useContext(FormContext);

  return (
    <>
      <div className={styles.resultsContainer}>
        <div>
          <h2 className={styles.resultsTitle}>Your results</h2>
          <p className={styles.resultsMessage}>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>
        <div className={styles.resultsAmountContainer}>
          <div>
            <p className={styles.monthlyMessage}>
              {selectedOption === "monthlyPayment"
                ? "Your monthly payments"
                : "Your total interest payments"}
            </p>
            <p className={styles.monthlyAmount}>
              {selectedOption === "monthlyPayment"
                ? monthlyPaymentAmount
                : originalTotalInterestPayment}
            </p>
          </div>
          <hr />
          <div>
            <p className={styles.totalAmountMessage}>
              Total you&#39;ll repay over the term
            </p>
            <p className={styles.totalAmount}>{totalCost}</p>
          </div>
        </div>
      </div>
    </>
  );
}
