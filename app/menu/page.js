import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import dynamic from "next/dynamic";
const GalleryIsotope = dynamic(() => import("@/components/GalleryIsotope"), {
  ssr: false,
});
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Menu"} />
      <section className="photo-gallery-area pt-130 rpt-100 pb-60 rpb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">photo gallery</span>
                <h2>explore latest photo gallery</h2>
              </div>
            </div>
          </div>
          <GalleryIsotope />
        </div>
      </section>
       {/* footer 5 */}
       <div className="headline-area bgc-dark-green pt-120 rpt-60 rel z-2">
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
      </div>
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
                  <span className="sub-title mb-5">join our newsletter</span>
                  <h2>subscribe follow newsletter to get more updates</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="newsletter-form-wrap"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6>Hurry up to join us to get more offer.</h6>
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
                  <div className="check-field mt-15">
                    <input id="update-news" type="checkbox" />
                    <label htmlFor="update-news">
                      Get 15 days update news &amp; latest offer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer 5 */}
    </WellFoodLayout>
  );
};
export default page;
