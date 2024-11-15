import emptyIllustration from "../../assets/images/illustration-empty.svg";
import styles from "./DefaultResults.module.css";

export function DefaultResults() {
  return (
    <>
      <div className={styles.resultsContainer}>
        <div>
          <img
            className={styles.image}
            src={emptyIllustration}
            alt="illustration of calculator"
            height="192"
            width="192"
          />
          <div>
            <h2 className={styles.resultTitle}>Results shown here</h2>
          </div>
          <div>
            <p className={styles.resultMessage}>
              Complete the form and click &quot;calculate payments&quot; to see
              what your monthly repayments would be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
