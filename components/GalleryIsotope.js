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
            <i className="flaticon-dish" />
            <span>All </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("Pasta ")}`}
            onClick={handleFilterKeyChange("Pasta ")}
            data-filter=".Pasta "
          >
            <i className="flaticon-dish" />
            <span>Pasta </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("vegetarian")}`}
            onClick={handleFilterKeyChange("vegetarian")}
            data-filter=".vegetarian"
          >
            <i className="flaticon-dish" />
            <span>Pizza </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("potatoes")}`}
            onClick={handleFilterKeyChange("potatoes")}
            data-filter=".potatoes"
          >
            <i className="flaticon-dish" />
            <span>Salad </span>
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${activeBtn("seafood")}`}
            onClick={handleFilterKeyChange("seafood")}
            data-filter=".seafood"
          >
            <i className="flaticon-dish" />
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



      {/* Pasta  */}
      <div className="row gallery-active">
        <div className="col-lg-4 col-sm-6 item Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/6.webp" alt="Gallery" />
            <h4>White sauce pasta</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/7.webp" alt="Gallery" />
            <h4>Red sauce pasta</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/8.webp" alt="Gallery" />
            <h4>Green sauce pasta</h4>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item  Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/9.webp" alt="Gallery" />
            <h4>Beef bolognese spegahetti pasta</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/10.webp" alt="Gallery" />
            <h4>Mix sauce spaghetti pasta</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/11.webp" alt="Gallery" />
            <h4>Signature spegatie pasta</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item Pasta ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/12.webp" alt="Gallery" />
            <h4>Special sauce pasta </h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
{/* Pasta  */}








  {/* Pizza */}
        <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/13.webp" alt="Gallery" />
            <h4>Peproni pizza</h4>
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
            <img src="assets/images/allimg/menu/14.webp" alt="Gallery" />
            <h4>Margarita pizza</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/15.webp" alt="Gallery" />
            <h4>Alfrado pizza</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>



         <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/16.webp" alt="Gallery" />
            <h4>Beef Ballistic Pizza</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/17.webp" alt="Gallery" />
            <h4>Amadio’s Pizza</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item vegetarian">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/18.webp" alt="Gallery" />
            <h4>Garlic Chicken Pizza</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

  {/* Pizza */}





{/* Salad */}
         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/19.webp" alt="Gallery" />
            <h4>Halloumi Salad</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/20.webp" alt="Gallery" />
            <h4>Italian Salad</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        
        

         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/21.webp" alt="Gallery" />
            <h4>Roca Salad</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/22.webp" alt="Gallery" />
            <h4>Chicken burger</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/23.webp" alt="Gallery" />
            <h4>Chicken Malai Salad</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

        

         <div className="col-lg-4 col-sm-6 item potatoes">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/24.webp" alt="Gallery" />
            <h4>Chicken burger</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

{/* Salad */}







        
{/* Bread Toasts  */}
         <div className="col-lg-4 col-sm-6 item seafood ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/25.webp" alt="Gallery" />
            <h4>Chicken Cheese Garlic Bread</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>

         <div className="col-lg-4 col-sm-6 item seafood ">
          <div
            className="gallery-item-three"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/allimg/menu/26.webp" alt="Gallery" />
            <h4>Cheese Garlic Bread</h4>
            {/* <span className="category">Delicious food</span> */}
          </div>
        </div>
{/* Bread Toasts  */}
        

      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
