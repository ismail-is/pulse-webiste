"use client";
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const GalleryIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <ul
        className="nav gallery-nav food-menu-tab mb-40"
        role="tablist"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <li>
          <button
            className={`nav-link ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-filter="*"
          >
            <i className="flaticon-cupcake" />
            <span>Pasta </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("vegetarian")}`}
            onClick={handleFilterKeyChange("vegetarian")}
            data-filter=".vegetarian"
          >
            <i className="flaticon-broccoli" />
            <span>Pizza </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("potatoes")}`}
            onClick={handleFilterKeyChange("potatoes")}
            data-filter=".potatoes"
          >
            <i className="flaticon-fried-potatoes" />
            <span>Salad </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("seafood")}`}
            onClick={handleFilterKeyChange("seafood")}
            data-filter=".seafood"
          >
            <i className="flaticon-crab" />
            <span>Bread Toasts </span>
          </button>
        </li>
        {/* <li>
          <button
            className={`nav-link ${activeBtn("drinks")}`}
            onClick={handleFilterKeyChange("drinks")}
            data-filter=".drinks"
          >
            <i className="flaticon-poinsettia" />
            <span>drinks</span>
          </button>
        </li> */}
      </ul>
      <div className="row gallery-active">
        <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/6.webp" alt="Gallery" />
            <h3>White sauce pasta</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/7.webp" alt="Gallery" />
            <h3>Red sauce pasta</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/8.webp" alt="Gallery" />
            <h3>Green sauce pasta</h3>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item potatoes drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/9.webp" alt="Gallery" />
            <h3>Beef bolognese spegahetti pasta</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/10.webp" alt="Gallery" />
            <h3>Mix sauce spaghetti pasta</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/11.webp" alt="Gallery" />
            <h3>Signature spegatie pasta</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/12.webp" alt="Gallery" />
            <h3>Special sauce pasta </h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>




        <div className="col-lg-4 col-sm-6 item vegetarian drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/14.webp" alt="Gallery" />
            <h3>Peproni pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/15.webp" alt="Gallery" />
            <h3>Margarita pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>





        

        

       

        

         

        

        

         

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/16.webp" alt="Gallery" />
            <h3>Alfrado pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/17.webp" alt="Gallery" />
            <h3>Beef bellistic pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/18.webp" alt="Gallery" />
            <h3>Amadio’s pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/19.webp" alt="Gallery" />
            <h3>Garlic chicken pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/20.webp" alt="Gallery" />
            <h3>Mix veg pizza</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        
        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/21.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/22.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/23.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/24.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/25.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item seafood drinks">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/26.webp" alt="Gallery" />
            <h3>Chicken burger</h3>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
