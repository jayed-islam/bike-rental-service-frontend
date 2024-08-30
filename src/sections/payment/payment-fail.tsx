const PaymentFail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-8">
            Unfortunately, your payment could not be processed. Please try again
            or contact support for assistance.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <ul className="text-left">
              <li className="mb-2">
                <span className="font-semibold">Transaction ID:</span>{" "}
                1234567890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Amount:</span> $100.00
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
              Retry Payment
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
