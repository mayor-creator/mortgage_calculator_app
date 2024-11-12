import { useContext } from "react";
import { FormContext } from "../Context/FormContext.jsx";
import { DefaultResults } from "../Results/DefaultResults.jsx";
import { Results } from "../Results/Results.jsx";
import calculatorIcon from "../../assets/images/icon-calculator.svg";
import styles from "./Form.module.css";

export function Form() {
  const {
    principal,
    years,
    rate,
    handlePrincipalChange,
    handleYearsChange,
    handleRateChange,
    handleRadioChange,
    handlePaymentOnSubmit,
    handleClearAllValues,
    submitted,
    selectedOption,
  } = useContext(FormContext);

  return (
    <>
      <section className={styles.mainWrapper}>
        <form>
          <div className={styles.titleBarContainer}>
            <h1 className={styles.title}>Mortgage Calculator</h1>
            <button
              className={styles.linkButton}
              onClick={handleClearAllValues}
            >
              Clear All
            </button>
          </div>
          <div className={styles.fieldsContainer}>
            <div>
              <label className={styles.label} htmlFor="mortgage_amount">
                Mortgage Amount{" "}
              </label>
              <div className={styles.numberInputContainer}>
                <div className={styles.principalAmountContainer}>
                  <p className={styles.prefix}>$</p>
                </div>
                <input
                  className={styles.numberInput}
                  id="mortgage_amount"
                  type="number"
                  value={principal}
                  onChange={handlePrincipalChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label className={styles.label} htmlFor="mortgage_term">
                  Mortgage Term{" "}
                </label>
                <div className={styles.numberInputContainer}>
                  <input
                    className={styles.yearsInput}
                    id="mortgage_term"
                    type="number"
                    value={years}
                    onChange={handleYearsChange}
                  />
                  <div className={styles.yearsContainer}>
                    <p className={styles.prefix}>Years</p>
                  </div>
                </div>
              </div>
              <div>
                <label className={styles.label} htmlFor="interest_rate">
                  Interest Rate{" "}
                </label>
                <div className={styles.numberInputContainer}>
                  <input
                    className={styles.percentInput}
                    id="interest_rate"
                    type="number"
                    step="0.01"
                    value={rate}
                    onChange={handleRateChange}
                  />
                  <div className={styles.percentContainer}>
                    <p className={styles.prefix}>%</p>
                  </div>
                </div>
              </div>
            </div>
            <fieldset>
              <legend>Mortgage Type</legend>
              <div>
                <input
                  id="repayment"
                  value="monthlyPayment"
                  checked={selectedOption === "monthlyPayment"}
                  onChange={handleRadioChange}
                  name="repayment"
                  type="radio"
                />
                <label htmlFor="Repayment">Repayment</label>
              </div>
              <div>
                <input
                  id="repayment"
                  value="interestOnly"
                  checked={selectedOption === "interestOnly"}
                  onChange={handleRadioChange}
                  name="repayment"
                  type="radio"
                />
                <label htmlFor="repayment">Interest Only</label>
              </div>
            </fieldset>
          </div>
          <div>
            <button
              className={styles.btn}
              type="submit"
              onClick={handlePaymentOnSubmit}
            >
              <img
                className={styles.btnImage}
                src={calculatorIcon}
                alt="calculator icon"
                width="24"
                height="24"
              />
              <p>Calculate Repayments</p>
            </button>
          </div>
        </form>
      </section>

      {!submitted && <DefaultResults />}
      {submitted && <Results />}
    </>
  );
}
