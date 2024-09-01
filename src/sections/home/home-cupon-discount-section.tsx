import CouponSection from "../cupon/cupon-view";

const HomeCouponsAndDiscounts: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-5 xl:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
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
              className="w-full rounded-lg shadow-md border"
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
