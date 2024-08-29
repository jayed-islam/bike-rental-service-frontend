import CouponSection from "../cupon/cupon-view";

const HomeCouponsAndDiscounts: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Special Offers Just for You
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center max-w-lg mx-auto">
          Grab our exclusive coupons and discounts to save big on your next
          purchase!
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg"
              alt="Special Offer Banner"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <CouponSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCouponsAndDiscounts;

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-gradient-to-r from-sky-100 to-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {promo.title}
              </h3>
              <p className="text-gray-700 mb-6 text-sm">{promo.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sky-800 bg-sky-200 px-4 py-1 text-sm rounded-full">
                  {promo.code}
                </span>
                <button
                  onClick={() => handleCopy(promo.code)}
                  className={`py-1 px-5 text-sm rounded-full text-white ${
                    copiedCode === promo.code
                      ? "bg-green-500"
                      : "bg-sky-600 hover:bg-sky-700"
                  } transition duration-300`}
                >
                  {copiedCode === promo.code ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="font-semibold">Expires on {promo.expiryDate}</p>
                <p className="mt-2">{promo.terms}</p>
              </div>
            </div>
          ))}
        </div> */
}
