const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Terms and Conditions
        </h1>
        <p className="mb-4">
          Welcome to Fast Bike! These terms and conditions outline the rules and
          regulations for the use of our website and the rental services we
          provide. By accessing this website and/or using our services, we
          assume you accept these terms and conditions. Do not continue to use
          Fast Bike if you do not agree to all of the terms and conditions
          stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. Rental Agreement
        </h2>
        <p className="mb-4">
          By renting a bike from Fast Bike, you agree to be bound by the terms
          of this rental agreement. You must be at least 18 years old to rent a
          bike, and you are responsible for the care and return of the bike in
          the condition it was rented to you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. Rental Period
        </h2>
        <p className="mb-4">
          The rental period begins at the time the bike is rented to you and
          ends when the bike is returned to Fast Bike. Late returns may be
          subject to additional charges.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. Payment
        </h2>
        <p className="mb-4">
          Payment for bike rental is due at the time of rental. We accept
          various forms of payment, including credit/debit cards. All payments
          are non-refundable unless otherwise stated.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Liability
        </h2>
        <p className="mb-4">
          Fast Bike is not liable for any injuries or damages that occur during
          the rental period. You are responsible for ensuring that you are fit
          to ride and that you follow all local traffic laws and safety
          regulations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Termination of Service
        </h2>
        <p className="mb-4">
          Fast Bike reserves the right to terminate or refuse service to any
          customer at our discretion. Any violation of these terms and
          conditions may result in the termination of your rental and/or future
          service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          6. Amendments
        </h2>
        <p className="mb-4">
          Fast Bike may revise these terms and conditions from time to time. The
          most current version will always be posted on our website. Continued
          use of our services constitutes acceptance of the updated terms.
        </p>

        <p className="mt-8">
          If you have any questions about our terms and conditions, please
          contact us at{" "}
          <a
            href="mailto:support@fastbike.com"
            className="text-blue-500 underline"
          >
            support@fastbike.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
