import ScrollToTop from "../../../hooks/use-scroll-to-top";
import HomeContactView from "../home-contact-view";
import HomeCouponsAndDiscounts from "../home-cupon-discount-section";
import HomeFeatureSection from "../home-feature-section";
import HomeHeroSection from "../home-hero-section";
import HomeTestimonialsSection from "../home-testimonials-section";
import HomeWhyChooseUs from "../home-why-choose-us-section";

const HomeView = () => {
  return (
    <div>
      <ScrollToTop />
      <HomeHeroSection />
      <HomeFeatureSection />
      <HomeTestimonialsSection />
      <HomeWhyChooseUs />
      <HomeCouponsAndDiscounts />
      <HomeContactView />
    </div>
  );
};

export default HomeView;
