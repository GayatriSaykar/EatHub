import React, { useState } from 'react';
import LogoutForm from './LogoutForm';

const Payment = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!startDate) {
      setStartDateError('Start Date is required');
      return;
    } else {
      setStartDateError('');
    }

    if (!endDate) {
      setEndDateError('End Date is required');
      return;
    } else {
      setEndDateError('');
    }


    try {
      // Simulate a payment API call
      // const paymentResponse = await makePayment({ startDate, endDate });
      // console.log("Payment Response:", paymentResponse);

      // Redirect to a confirmation page or show a success message
      // history.push('/payment-confirmation'); // Example of using React Router
      console.log("Payment Successful");
    } catch (error) {
      console.error("Payment Error:", error);
      // Handle payment failure or display an error message
    }
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setStartDateError('');
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setEndDateError('');
  };

  return (
    <div className="row">
      <div className="nav navbar">
        <LogoutForm />
      </div>
      <div className="col-md-6 mx-auto mt-5">
        <form className="form-control-sm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <h2 className="text-center">Payment</h2>

            <div className="mb-3">
              <label htmlFor="checkin" className="form-label">
                Start Date:
              </label>
              <input type="date" id="checkin" className={`form-control form-control-sm ${startDateError && 'is-invalid'}`} value={startDate} onChange={handleStartDateChange} />
              {startDateError && <div className="invalid-feedback">{startDateError}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="checkout" className="form-label">
                End Date:
              </label>
              <input type="date" id="checkout" className={`form-control form-control-sm ${endDateError && 'is-invalid'}`} value={endDate} onChange={handleEndDateChange} />
              {endDateError && <div className="invalid-feedback">{endDateError}</div>}
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
