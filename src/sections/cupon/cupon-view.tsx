import { useState } from "react";
import WheelComponent from "./wheel-spinn";
import CouponModal from "./cupon-dialog";

const CouponSection = () => {
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleWheelEnd = (selectedDiscount: string) => {
    const generatedCoupon = `${selectedDiscount}`;
    setCouponCode(generatedCoupon);
    localStorage.setItem("couponCode", generatedCoupon);
    setIsCouponVisible(true);
  };

  return (
    <div>
      <WheelComponent onEnd={handleWheelEnd} />
      <CouponModal
        isVisible={isCouponVisible}
        couponCode={couponCode}
        onClose={() => setIsCouponVisible(false)}
      />
    </div>
  );
};

export default CouponSection;
