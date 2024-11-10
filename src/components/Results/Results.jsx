import { useContext } from "react";
import { FormContext } from "../Context/FormContext.jsx";

export function Results() {
  const {
    selectedOption,
    originalTotalInterestPayment,
    monthlyPaymentAmount,
    totalCost,
  } = useContext(FormContext);

  return (
    <>
      <section>
        <div>
          <h2>Your results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
        </div>
        <div>
          <div>
            <p>
              {selectedOption === "monthlyPayment"
                ? "Your monthly payments"
                : "Your total interest payments"}
            </p>
            <p>
              {selectedOption === "monthlyPayment"
                ? monthlyPaymentAmount
                : originalTotalInterestPayment}
            </p>
          </div>
          <hr />
          <div>
            <p>Total you&#39;ll repay over the term</p>
            <p>{totalCost}</p>
          </div>
        </div>
      </section>
    </>
  );
}
