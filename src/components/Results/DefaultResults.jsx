import emptyIllustration from "../../assets/images/illustration-empty.svg";

export function DefaultResults() {
  return (
    <>
      <section>
        <div>
          <img
            src={emptyIllustration}
            alt="illustration of calculator"
            height="192"
            width="192"
          />
        </div>
        <div>
          <h2>Result shown here</h2>
        </div>
        <div>
          <p>
            Complete the form and click &quot;calculate payments&quot; to see
            what your monthly repayments would be.
          </p>
        </div>
      </section>
    </>
  );
}
