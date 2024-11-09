import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [rate, setRate] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handlePrincipalChange = (event) => {
    setPrincipal(event.target.value);
  };
  const handleYearsChange = (event) => {
    setYears(event.target.value);
  };
  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const interestRate = (rate) => {
    const percentage = 100;
    const monthly = 12;
    const interest = (rate / percentage / monthly).toFixed(6);
    return Number(interest);
  };

  const monthlyPayment = (principal, years, rate) => {
    let numberOfMonth = Number(years * 12);
    let principalPayment = Number((principal * interestRate(rate)).toFixed(2));
    let interestPeriod = Number(1 + interestRate(rate));
    let interestPeriodPower = Number(
      Math.pow(interestPeriod, numberOfMonth).toFixed(9)
    );
    let amount = Number(principalPayment * interestPeriodPower);
    let interestAmount = Number(interestPeriodPower - 1);
    let monthlyPaymentAmount = Number((amount / interestAmount).toFixed(2));
    return monthlyPaymentAmount;
  };

  const originalTotalInterest = (principal, years, rate) => {
    const numberOfMonth = Number(years * 12);
    const monthlyPaid = monthlyPayment(principal, years, rate);

    let totalInterestPaid = 0;
    let balance = principal;

    for (let i = 1; i <= numberOfMonth; i++) {
      const monthlyInterest = balance * interestRate(rate);
      totalInterestPaid += monthlyInterest;
      balance -= monthlyPaid - monthlyInterest;
    }
    return Number(totalInterestPaid.toFixed(2));
  };

  const totalPayment = (principal, years, rate) => {
    let totalAmountPaid =
      Number(principal) + originalTotalInterest(principal, years, rate);

    const totalPaymentFormatted = totalAmountPaid.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return totalPaymentFormatted;
  };

  const monthlyPaymentAmount = monthlyPayment(
    principal,
    years,
    rate
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalCost = totalPayment(principal, years, rate);

  const handlePaymentOnSubmit = (event) => {
    event.preventDefault();
    if (
      principal <= 0 ||
      rate <= 0 ||
      years <= 0 ||
      principal === undefined ||
      rate === undefined ||
      years === undefined
    ) {
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  // TODO - create function to handle error
  // TODO - create function to clear all values
  // TODO - how to checked radio buttons

  return (
    <>
      <FormContext.Provider
        value={{
          principal,
          years,
          rate,
          handlePrincipalChange,
          handleYearsChange,
          handleRateChange,
          handlePaymentOnSubmit,
          submitted,
          monthlyPaymentAmount,
          totalCost,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
}

FormContextProvider.propTypes;
