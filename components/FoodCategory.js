import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="food-category-area pb-90 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">  Fresh From Our Chefs To You</span>
              <h2 style={{fontWeight:'bolder'}}>
                How It Works
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-recommended-food" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Choose Your Plan</Link>
                </h4>
                <p>Pick a meal plan that suits your lifestyle and goals — it only takes a minute</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-fast-delivery" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant"> We Start Cooking</Link>
                </h4>
                <p>Our chefs prepare your meals fresh with high-quality, wholesome ingredients</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-cashback" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Delivered To Your Door</Link>
                </h4>
                <p>Punctual, fresh, and right when you need it — no stress, no mess</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-cashback" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Enjoy Every Bite</Link>
                </h4>
                <p>Heat, eat, and feel great — healthy eating has never been this easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodCategory;
