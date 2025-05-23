import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="food-category-area pb-90 rpb-65 rel z-1" style={{marginTop:'-90px'}}>
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
            <div className="featured-item" style={{backgroundColor:'#014820'}} >
              <div className="icon">
                <i className="flaticon-recommended-food" style={{color:'#E7C001'}}/>
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant" style={{color:'white'}}>Choose Your Plan</Link>
                </h4>
                <p style={{color:'white'}}>Pick a meal plan that suits your lifestyle and goals — it only takes a minute</p>
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
            <div className="featured-item" style={{backgroundColor:'#E7C001'}}>
              <div className="icon">
                <i className="flaticon-chef" style={{color:'#014820'}}/>
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant" style={{color:'#014820 '}}> We Start Cooking</Link>
                </h4>
                <p style={{color:'#014820'}}>Our chefs prepare your meals fresh with high-quality, wholesome ingredients</p>
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
            <div className="featured-item"  style={{backgroundColor:'#E7C001'}}>
              <div className="icon">
                <i className="flaticon-dish" style={{color:'#014820'}}/>
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant" style={{color:' #014820 '}}>Delivered To Your Door</Link>
                </h4>
                <p style={{color:'#014820  '}}>Punctual, fresh, and right when you need it — no stress, no mess</p>
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
            <div className="featured-item"  style={{backgroundColor:'#014820'}}> 
              <div className="icon">
                <i className="flaticon-high-quality" style={{color:'#E7C001 '}} />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant" style={{color:'white'}}>Enjoy Every Bite</Link>
                </h4>
                <p style={{color:'white'}}>Heat, eat, and feel great — healthy eating has never been this easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodCategory;
