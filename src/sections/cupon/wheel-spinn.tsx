// import React, { useState } from "react";
// import "./wheel.css";
// import CustomButton from "../../components/common-button";
// import { useGetAllCouponsQuery } from "../../redux/reducers/coupon/couponApi";

// interface WheelProps {
//   onEnd: (discount: string) => void;
// }

// const WheelComponent: React.FC<WheelProps> = ({ onEnd }) => {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const { data, isLoading } = useGetAllCouponsQuery();
//   const discounts = ["10", "20", "30"];

//   const startSpin = () => {
//     setIsSpinning(true);
//     const randomIndex = Math.floor(
//       (Math.random() * data && data?.data?.length) as number
//     );
//     const selectedDiscount = data?.data[randomIndex];

//     setTimeout(() => {
//       setIsSpinning(false);
//       onEnd(selectedDiscount);
//     }, 3000);
//   };

//   return (
//     <div className="wheel-container">
//       <div className={`wheel ${isSpinning ? "spinning" : ""}`}>
//         {data?.data?.map((item) => (
//           <div className="wheel-segment">{item.discountAmount}%</div>
//         ))}
//       </div>
//       <CustomButton
//         className="mt-5"
//         onClick={startSpin}
//         loading={isSpinning}
//         title="Spin the Wheel"
//       />
//     </div>
//   );
// };

// export default WheelComponent;
import React, { useState } from "react";
import "./wheel.css";
import CustomButton from "../../components/common-button";
import { useGetAllCouponsQuery } from "../../redux/reducers/coupon/couponApi";

interface WheelProps {
  onEnd: (discount: string) => void;
}

const WheelComponent: React.FC<WheelProps> = ({ onEnd }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const { data } = useGetAllCouponsQuery();

  const startSpin = () => {
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * (data?.data?.length || 0));
    const selectedCoupon = data?.data[randomIndex];

    setTimeout(() => {
      setIsSpinning(false);
      if (selectedCoupon) {
        onEnd(`${selectedCoupon.discountAmount}%`);
      }
    }, 3000); // Spin duration
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${isSpinning ? "spinning" : ""}`}>
        {data?.data?.map((item) => (
          <div key={item.code} className="wheel-segment">
            {item.discountAmount}%
          </div>
        ))}
      </div>
      <CustomButton
        className="mt-5"
        onClick={startSpin}
        loading={isSpinning}
        title="Spin the Wheel"
      />
    </div>
  );
};

export default WheelComponent;
