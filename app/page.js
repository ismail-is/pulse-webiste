"use client";
import CategoryBanner from "@/components/CategoryBanner";
import Counter from "@/components/Counter";
import FoodCategory from "@/components/FoodCategory";
import MenuOder from "@/components/MenuOder";
import OfferCard from "@/components/OfferCard";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      {/* Hero Area Start */}
      {/* <section
        className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content text-white"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-35">
                  <i className="far fa-hamburger" /> Start price Only $25
                </span>
                <h1>delicious food near your town</h1>
                <p>
                  Welcome to our culinary sanctuary, where every dish tells a
                  story every bite is an adventure at our food website, we
                  invite
                </p>
                <Link href="menu-chicken" className="theme-btn">
                  View All Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-images rmt-60">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                <div className="price">
                  <img src="assets/images/hero/price.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section> */}
      {/* Hero Area End */}

{/* index2 hero  */}
<section
        className="hero-area-three pt-250 pb-220 rpb-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/allimg/home/bg3.png)" ,
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left" >  Nutritious &emsp;</span>
          <span className="marquee-inner left">  Nutritious &emsp;</span>
          <span className="marquee-inner left">  Nutritious &emsp;</span>
        </span>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="hero-content-three mt-250 rmt-0 rmb-55 text-white"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>At Your Door Step</h1>
                <p>
                  Crafted by chefs, powered by nutrition
                </p>
                <Link href="menu" className="theme-btn style-two">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-three-image">
                {/* <img src="assets/images/hero/hero-three.png" alt="Hero" /> */}
                {/* <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    50% <br />
                    off
                  </span>
                </div> */}
                  <div
                className="cta-two-image rmt-55 rmb-75"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
  // src="assets/images/allimg/dishpng/rotate/3.png"
  src="assets/images/allimg/home/mainbg1.png"
  alt="CTA"
  style={{
    animation: 'spin 20s linear infinite',
    transformOrigin: 'center',
    marginTop:'-50px'
    
    
  }}
/>

                {/* <div className="badge">
                  <img src="assets/images/cta/cta-two-badge.png" alt="Badge" />
                </div> */}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <FoodCategory/>
{/* index2 hero  */}


{/* custome */}
<MenuOder/>
{/* custome */}








      {/* Headline area start */}
      <div className="headline-area pt-10 rpt-90 rel z-1 mb-120">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#014820'}}>Freshness</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item"style={{color:'#094D26'}}>Nutritious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#0C6D20'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Delicious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#014820'}}>Freshness</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Nutritious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#0C6D20'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Delicious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#0C6D20'}}>Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#0C6D20'}}>delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#0C6D20'}}>burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>



 <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
        <span className="marquee-wrap style-two">
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  {/* <span className="sub-title mb-5">Why choose us</span> */}
                  <h2>Why Choose Pulse?</h2>
                </div>
                <p>
                At Pulse, we believe eating healthy should be simple, satisfying, and sustainable. Our meals are crafted by expert chefs, backed by nutritional science, and tailored for real life.
                </p>
                <p>Whether you're chasing fitness goals or simply want to feel your best — Pulse delivers fresh, wholesome meals that never compromise on taste.</p>
                <div className="about-btn-author mb-60">
                  <Link href="/" className="theme-btn">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  {/* <div className="author">
                    <img src="assets/images/about/author.jpg" alt="Author" />
                    <h6>
                      Ben A. Conners / <span>CEO &amp; Founder</span>
                    </h6>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text "
                        data-speed={3000}
                        data-stop={98}
                      >
                        <Counter end={98} />%
                      </span>
                      <span className="counter-title"> Customer Satisfaction</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={95}
                      >
                        <Counter end={95} />%
                      </span>
                      <span className="counter-title">On-Time Deliveries</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={100}
                      >
                        <Counter end={100} />%
                      </span>
                      <span className="counter-title">Chef-Crafted Recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-recommended-food" />
                    </div>
                    <h4>
                      <Link href="menu-burger"> Chef-Crafted, Nutrition-Backed</Link>
                    </h4>
                    <p>
                     Delicious meals designed by chefs and approved by experts.
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-fast-delivery" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Freshness You Can Taste</Link>
                    </h4>
                    <p>
                     Prepared daily using real, high-quality ingredients.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item mt-30 rmt-0">
                    <div className="icon">
                      <i className="flaticon-cashback" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Tailored for Your Lifestyle</Link>
                    </h4>
                    <p>
                      Meal plans that match your goals and routine.
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-dish" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Convenience Without Compromise</Link>
                    </h4>
                    <p>
                    Healthy food delivered on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/allimg/dishpng/rotate/2.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/allimg/dishpng/rotate/4.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/allimg/dishpng/rotate/3.png" alt="Shape" />
          </div>
        </div>
      </section>



      {/* Headline Area end */}
      {/* About Us Area start */}
      {/* <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="about-image-part mb-30 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="food-review">
                  <div className="author">
                    <img
                      src="assets/images/about/review-author.png"
                      alt="Author"
                    />
                  </div>
                  <span className="text">Very good food</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <img src="assets/images/about/about.jpg" alt="About" />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
                  }}
                >
                  <span className="for-border" />
                  <span className="text">
                    quality <br />
                    food
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>the amazing &amp; Quality food for your good health</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <div className="about-btn-author pt-5 mb-45">
                  <Link href="about" className="theme-btn style-two">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <Link href="about" className="read-more">
                    Explore popular menu{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Best Quality Food</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Experience our Chefs</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
          </div>
        </div>
      </section> */}
      {/* About Us Area end */}
      {/* Offer Card Area start */}
      <OfferCard />
      {/* Offer Card Area end */}
      {/* Offer Area start */}


      {/* <section
        className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/offer-dot-bg.png)",
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="offer-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/offer/delicious.png" alt="Image" />
                <h2>Special deal offer for this week</h2>
                <h3>
                  grilled beef meat only <span>$59</span>
                </h3>
                <p>
                  Restaurant, where culinary excellence meets warm hospitality
                  in every dish we serve nestled in the heart of city
                </p>
                <Link href="shop" className="theme-btn">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/offer-img.png"
                  alt="Offer Image"
                />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    only <br />
                    <span className="price">$59</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/offer-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/offer-shape2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/offer-shape3.png" alt="Shape" />
          </div>
        </div>
      </section> */}
     



      {/* Offer Area end */}
      {/* Headline area start */}
       <div className="headline-area pt-10 rpt-90 rel z-1 mb-120">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#014820'}}>Freshness</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item"style={{color:'#094D26'}}>Nutritious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#0C6D20'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Delicious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#014820'}}>Freshness</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Nutritious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#0C6D20'}}/>
            </span>
            <span className="marquee-item" style={{color:'#F79E36'}}>Delicious </span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item" style={{color:'#0C6D20'}}>Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#0C6D20'}}>delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
            <span className="marquee-item" style={{color:'#0C6D20'}}>burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" style={{color:'#F79E36'}}/>
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>




      {/* Headline Area end */}
      {/* Popular Menu Area start */}
      <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-left mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5 " style={{textAlign:'left'}}>popular menu</span>
                <h2 style={{textAlign:'left'}}>
                  Discover Our Menu
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ">
           



            <div
              className="col-xl-3 col-lg-6 z-5"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h3 className="sub-title mb-6" style={{textAlign:'center',textTransform:'capitalize',color:'#014820',fontWeight:'700'}}>Pasta </h3>
              <div className="food-item" id="foodItem1">
                <div className="content">
                  <div className="name-desc">
                    <h5>White sauce pasta</h5>
                    <p>Creamy, cheesy, and rich with a smooth finish</p>
                  </div>
                  {/* <div className="price">
                    <span>$25</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/20.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item" id="foodItem2">
                <div className="content">
                  <div className="name-desc">
                    <h5>Red sauce pasta</h5>
                    <p>Tangy tomato blend with herbs and seasoning</p>
                  </div>
                  {/* <div className="price">
                    <span>$10</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/5.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item" id="foodItem3">
                <div className="content">
                  <div className="name-desc">
                    <h5>Green sauce pasta</h5>
                    <p>Fresh basil pesto with a creamy twist</p>
                  </div>
                  {/* <div className="price">
                    <span>$22</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/4.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item" id="foodItem4">
                <div className="content">
                  <div className="name-desc">
                    <h5>Beef bolognese spegahetti pasta</h5>
                    <p>Slow-cooked minced beef in classic Italian sauce</p>
                  </div>
                  {/* <div className="price">
                    <span>$43</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/19.png" alt="Food Image" />
                </div>
              </div>


              
              <div className="food-item mb-30" id="foodItem5">
                <div className="content">
                  <div className="name-desc">
                    <h5>Mix sauce spaghetti pasta</h5>
                    <p>White and red sauces blended for bold flavor</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/18.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30" id="foodItem5" style={{marginTop:'-30px'}}>
                <div className="content">
                  <div className="name-desc">
                    <h5>Signature spegatie pasta</h5>
                    <p>Our chef’s special recipe with signature spices</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/17.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30" id="foodItem5" style={{marginTop:'-30px'}}>
                <div className="content">
                  <div className="name-desc">
                    <h5>Special sauce pasta </h5>
                    <p>A surprise mix of sauces and bold flavors</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/16.png" alt="Food Image" />
                </div>
              </div>
            </div>















             <div
              className="col-xl-3 col-lg-6 z-4"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
               <h3 className="sub-title mb-6" style={{textAlign:'center',textTransform:'capitalize',color:'#014820',fontWeight:'700'}}>Pizza </h3>
              <div className="food-item" id="foodItem5">
                <div className="content">
                  <div className="name-desc">
                    <h5>Peproni pizza</h5>
                    <p>Crispy pepperoni layered over cheesy perfection</p>
                  </div>
                  {/* <div className="price">
                    <span>$25</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/15.png" alt="Food Image" />
                </div>
              </div>
              
              <div className="food-item" id="foodItem3">
                <div className="content">
                  <div className="name-desc">
                    <h5>Margarita pizza</h5>
                    <p>Classic tomato, mozzarella, and fresh basil combo</p>
                  </div>
                  {/* <div className="price">
                    <span>$22</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/14.png" alt="Food Image" />
                </div>
              </div>

              <div className="food-item" id="foodItem2">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alfrado pizza</h5>
                    <p>Our house favorite with a secret twist</p>
                  </div>
                  {/* <div className="price">
                    <span>$43</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/13.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item" id="foodItem2">
                <div className="content">
                  <div className="name-desc">
                    <h5> Beef Ballistic Pizza</h5>
                    <p>Loaded with spicy beef and bold flavors</p>
                  </div>
                  {/* <div className="price">
                    <span>$43</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/12.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item" id="foodItem2">
                <div className="content">
                  <div className="name-desc">
                    <h5> Amadio’s Pizza</h5>
                    <p>Our house favorite with a secret twist</p>
                  </div>
                  {/* <div className="price">
                    <span>$43</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/11.png" alt="Food Image" />
                </div>
              </div>


              <div className="food-item mb-30" id="foodItem1" >
                <div className="content">
                  <div className="name-desc">
                    <h5>Garlic Chicken Pizza</h5>
                    <p>Grilled chicken with a punch of garlic</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/10.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30" id="foodItem1" style={{marginTop:'-30px'}}>
                <div className="content">
                  <div className="name-desc">
                    <h5>Mix Veg Pizza</h5>
                    <p>A colorful mix of seasoned, fresh vegetables</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/13.png" alt="Food Image" />
                </div>
              </div>
            </div>



 {/* Salad */}          
            <div
              className="col-xl-3 col-lg-6 z-3"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
               <h3 className="sub-title mb-6" style={{textAlign:'center',textTransform:'capitalize',color:'#014820',fontWeight:'700'}}>Salad </h3>
              <div className="food-item"  id="foodItem1">
                <div className="content">
                  <div className="name-desc" >
                    <h5> Halloumi Salad</h5>
                    <p>Grilled halloumi on crisp greens and veggies</p>
                  </div>
                  {/* <div className="price">
                    <span>$25</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/9.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item"  id="foodItem2">
                <div className="content">
                  <div className="name-desc">
                    <h5>Italian Salad</h5>
                    <p>Olives, cherry tomatoes, herbs, and vinaigrette dressing</p>
                  </div>
                  {/* <div className="price">
                    <span>$10</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/8.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item"  id="foodItem3">
                <div className="content">
                  <div className="name-desc">
                    <h5>Roca Salad</h5>
                    <p>Fresh arugula tossed with tangy dressing</p>
                  </div>
                  {/* <div className="price">
                    <span>$22</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/7.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item"  id="foodItem4">
                <div className="content">
                  <div className="name-desc">
                    <h5>Mix Veg Salad</h5>
                    <p>Seasonal vegetables with a light citrus dressing</p>
                  </div>
                  {/* <div className="price">
                    <span>$43</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/6.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item mb-30"  id="foodItem5">
                <div className="content">
                  <div className="name-desc">
                    <h5>Chicken Malai Salad</h5>
                    <p>Creamy malai chicken on a fresh salad bed</p>
                  </div>
                  {/* <div className="price">
                    <span>$77</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/1.png" alt="Food Image" />
                </div>
              </div>
            </div>
{/* Salad */}

{/* Bread Toasts */}
             <div
              className="col-xl-3 col-lg-6 z-2"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
               <h3 className="sub-title mb-6" style={{textAlign:'center',textTransform:'capitalize',color:'#014820',fontWeight:'700'}}>Bread Toasts </h3>
              <div className="food-item" id="foodItem5">
                <div className="content">
                  <div className="name-desc" >
                    <h5>Chicken Cheese Garlic Bread</h5>
                    <p>Cheesy garlic toast topped with tender chicken</p>
                  </div>
                  {/* <div className="price">
                    <span>$25</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/2.png" alt="Food Image" />
                </div>
              </div>
              <div className="food-item"  id="foodItem4">
                <div className="content">
                  <div className="name-desc">
                    <h5>Cheese Garlic Bread</h5>
                    <p>Crispy bread topped with gooey garlic cheese</p>
                  </div>
                  {/* <div className="price">
                    <span>$10</span>
                  </div> */}
                </div>
                <div className="image">
                  <img src="assets/images/allimg/dishpng/3.png" alt="Food Image" />
                </div>
              </div>
             
            </div>
{/* Bread Toasts */}

          </div>
        </div>
      </section>




 {/* <CategoryBanner/> */}


       <section className="cta-area-two bgc-black text-white py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="cta-content-two mt-20 rmt-0"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                
                <div className="section-title text-white mb-20">
                    <div style={{ textAlign: "left" }}>
  <img
    src="assets/images/allimg/logo/pulslogo.png"
    alt="Good Food"
    style={{ maxWidth: "100%", height: "50px"}}
  />
</div>

                  <h2>Your search for great food ends here</h2>
                </div>
                <hr className="mt-35 mb-45" />
                <p>
                 From wholesome meals to indulgent bites, Pulse serves up freshness, flavor, and nutrition
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-two-image rmt-55 rmb-75"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
  src="assets/images/allimg/dishpng/rotate/2.png"
  alt="CTA"
  style={{
    animation: 'spin 20s linear infinite',
    transformOrigin: 'center',
  }}
/>

                <div className="badge">
                  {/* <img src="assets/images/cta/cta-two-badge.png" alt="Badge" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-two-image rmt-55 rmb-75"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
  src="assets/images/allimg/dishpng/rotate/3.png"
  alt="CTA"
  style={{
    animation: 'spin 20s linear infinite ',
    transformOrigin: 'center',
    animationDirection:'reverse'
  }}
/>

                <div className="badge">
                  {/* <img src="assets/images/cta/cta-two-badge.png" alt="Badge" /> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div
                className="cta-content-list"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>
                  25 + Years We Provide Quality foods Get 20% Off For Every
                  Foods
                </h5>
                <ul className="list-style-one mt-30 mb-40">
                  <li>Best Quality Natural &amp; Fresh Food</li>
                  <li>Experience &amp; Quality Chefs</li>
                  <li>Awards Winning Restaurant</li>
                  <li>Healthy &amp; Organic Foods</li>
                </ul>
                <Link href="contact" className="theme-btn">
                  Book A Table <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="cta-two-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/cta-two1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/cta-two2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/cta-two3.png" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/cta-two4.png" alt="Shape" />
          </div>
        </div>
      </section>
     
      {/* Popular Menu Area end */}
      {/* Gallery Area Start */}
      {/* <div className="gallery-area rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-6" >
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery1.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery2.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery3.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Burger, Hamburger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Gallery Area End */}
      {/* Why choose Us Area start */}
     
      {/* Why choose Us Area end */}
      {/* Headline area start */}
      {/* <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      {/* <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-white text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">customer feedback</span>
                <h2>what have lot’s off happy customer explore feedback</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </section> */}
      {/* Testimonials Area end */}
      {/* Call To Action Area start */}
      <section className="cta-area py-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="cta-content">
                <div className="section-title text-white mb-20">
                  {/* <span className="sub-title mb-5">Need any food?</span> */}
                  <h2>our search for great food ends here</h2>
                </div>
                <Link href="/" className="theme-btn style-two">
                 Order Now  <i className="far fa-arrow-alt-right" />
                </Link>
                <div
                  className="cta-badge"
                  style={{
                    backgroundImage: "url(assets/images/shapes/cta-shape.png)",
                  }}
                >
                  <span>
                    quality
                    <br /> food
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cta-bg"
          style={{ backgroundImage: "url(assets/images/background/cta.jpg)" }}
        />
      </section>
      {/* Call To Action Area end */}
      {/* Dishes Area start */}
      {/* <section className="dishes-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular dishes</span>
                <h2>explore popular menus</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish1.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fresh chicken burger</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish2.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">pizza with mushrooms</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish3.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">
                      double burger &amp; fries
                    </Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish4.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fried chicken french</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Dishes Area end */}
      {/* Blog Area start */}
      {/* <section className="blog-area pt-100 rpt-70 pb-90 rpb-60 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">latest news &amp; blog</span>
                <h2>get every single updates latest</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Quality Food</a>
                    </li>
                    <li>
                      <a href="#">March 25, 2024</a>
                    </li>
                    <li>
                      <a href="#">comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h4>
                    <Link href="blog-details">
                      Culinary Chronicles Exploring Gastronomic Wonders at
                      foodking Restaurant
                    </Link>
                  </h4>
                  <p>
                    Restaurant where culinary excellence meets hospitality in
                    every dish we serve settled in the heart
                  </p>
                  <Link href="blog-details" className="read-more">
                    Read more <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* footer 5 */}
       {/* <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-2">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/heading1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/heading2.png" alt="Shape" />
          </div>
        </div>
      </div> */}
        <section className="newsletter-area bgc-dark-green pt-75 rel z-1">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div
                  className="section-title text-white rmb-25"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  {/* <span className="sub-title mb-5">join our newsletter</span> */}
                  <h2>Ready to subscribe or have questions? Contact us now!</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="newsletter-form-wrap"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  {/* <h6>Hurry up to join us to get more offer.</h6> */}
                  <form className="newsletter-form style-two mt-15" action="#">
                    <label htmlFor="news-email">
                      <i className="fas fa-envelope" />
                    </label>
                    <input
                      id="news-email"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button className="theme-btn style-two" type="submit">
                      Subscribe <i className="far fa-arrow-alt-right" />
                    </button>
                  </form>
                  {/* <div className="check-field mt-15">
                    <input id="update-news" type="checkbox" />
                    <label htmlFor="update-news">
                      Get 15 days update news &amp; latest offer
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer 5 */}
      {/* Blog Area end */}
    </WellFoodLayout>
  );
};
export default page;
