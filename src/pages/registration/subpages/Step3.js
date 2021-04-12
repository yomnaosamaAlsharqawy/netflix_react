export default function Step3() {
    return (
        <div>
            <h1>Setup your payment</h1>
            <div className="StepThreeButton" onClick={() => {
          History.push("/signup/creditOption");
      }}>
        <p>Credit or Debit Card</p>
      </div>
        </div>
    )
}