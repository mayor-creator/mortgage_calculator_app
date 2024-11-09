import { useContext } from "react";
import { FormContext } from "../Context/FormContext.jsx";
import { DefaultResults } from "../Results/DefaultResults.jsx";
import { Results } from "../Results/Results.jsx";
import calculatorIcon from "../../assets/images/icon-calculator.svg";

export function Form() {
  const {
    principal,
    years,
    rate,
    handlePrincipalChange,
    handleYearsChange,
    handleRateChange,
    handlePaymentOnSubmit,
    submitted,
  } = useContext(FormContext);

  return (
    <>
      <section>
        <form>
          <div>
            <h1>Mortgage Calculator</h1>
            <button>Clear All</button>
          </div>
          <div>
            <label htmlFor="mortgage_amount">Mortgage Amount </label>
            <input
              id="mortgage_amount"
              type="number"
              value={principal}
              onChange={handlePrincipalChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="mortgage_term">Mortgage Term </label>
              <input
                id="mortgage_term"
                type="number"
                value={years}
                onChange={handleYearsChange}
              />
            </div>
            <div>
              <label htmlFor="interest_rate">Interest Rate </label>
              <input
                id="interest_rate"
                type="number"
                step="0.01"
                value={rate}
                onChange={handleRateChange}
              />
            </div>
          </div>
          <fieldset>
            <legend>Mortgage Type</legend>
            <div>
              <input id="repayment" name="repayment" type="radio" />
              <label htmlFor="Repayment">Repayment</label>
            </div>
            <div>
              <input id="repayment" name="repayment" type="radio" />
              <label htmlFor="repayment">Interest Only</label>
            </div>
          </fieldset>
          <div>
            <button type="submit" onClick={handlePaymentOnSubmit}>
              <img
                src={calculatorIcon}
                alt="calculator icon"
                width="24"
                height="24"
              />
              Calculate Repayments
            </button>
          </div>
        </form>
      </section>

      {!submitted && <DefaultResults />}
      {submitted && <Results />}
    </>
  );
}
