import { NavLink, useLocation } from "react-router-dom";

const PaymentConfirm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const tnxId = searchParams.get("tnxId") || "";
  //   const bikeId = searchParams.get("bikeId") || "";
  //   const startTime = searchParams.get("startTime") || "";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-8">
            Your payment has been successfully processed. Thank you for your
            purchase!
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <ul className="text-left">
              <li className="mb-2">
                <span className="font-semibold">Transaction ID:</span>
                {tnxId}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Amount Avanced Paid:</span>{" "}
                100.00
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <NavLink to="/">
              <button className="bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-sky-900 transition duration-200">
                Go to Home
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;
