import React, { useState } from 'react';
import './MenuOder.css';

const MenuOder = () => {
  const [activeTab, setActiveTab] = useState('lifestyle');
  const [mealCounts, setMealCounts] = useState({
    breakfast: 1,
    lunch: 1,
    dinner: 1,
    salad: 1,
    snack: 1
  });

  const mealImages = {
    breakfast: 'assets/images/allimg/box/1.png',
    lunch: 'assets/images/allimg/box/2.png',
    dinner: 'assets/images/allimg/box/3.png',
    salad: 'assets/images/allimg/box/6.png',
    snack: 'assets/images/allimg/box/6.png',
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleMealCountChange = (mealType, value) => {
    setMealCounts(prev => ({
      ...prev,
      [mealType]: Math.max(0, Math.min(2, parseInt(value)))
    }));
  };

  const incrementMeal = (mealType) => {
    setMealCounts(prev => ({
      ...prev,
      [mealType]: Math.min(2, prev[mealType] + 1)
    }));
  };

  const decrementMeal = (mealType) => {
    const minValue = (mealType === 'salad' || mealType === 'snack') ? 1 : 0;
    setMealCounts(prev => ({
      ...prev,
      [mealType]: Math.max(minValue, prev[mealType] - 1)
    }));
  };

  const totalItems = Object.values(mealCounts).reduce((sum, count) => sum + count, 0);

  return (
    <section className="s_text_image pt32 pb32 o_colored_level" style={{ backgroundImage: 'none' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-12 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2 style={{ fontWeight: 'bolder' }}>
                YOUR DAILY ROUTINE
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center package package-sec">
          {/* Left Side - Meal Sliders */}
          <div className="col-lg-8 col-md-12 pt16 pb16 o_colored_level">
            <div className="s_tabs_content tab-content">
              <div className={`tab-pane fade ${activeTab === 'lifestyle' ? 'show active' : ''}`}>
                <section className="s_text_block">
                  <div className="container">
                    {['breakfast', 'lunch', 'dinner', 'salad', 'snack'].map((mealType) => (
                      <div className="row align-items-center mb-4" key={mealType} >
                        <div className="col-lg-2 col-md-2" id="mobilegap">
                          <span className="english-font-dpbreak text-capitalize" style={{ color: 'black' }}>{mealType}</span>
                        </div>
                        <div className="col-lg-9 col-md-9">
                          <div className="d-flex align-items-center">
                            <input
                              type="range"
                              className="fh_range_dynamic_menu_input flex-grow-2 mx-3"
                              value={mealCounts[mealType]}
                              min={mealType === 'salad' || mealType === 'snack' ? '1' : '0'}
                              max="2"
                              onChange={(e) => handleMealCountChange(mealType, e.target.value)}
                              style={{ accentColor: '#01461F' }}
                            />
                            <div className="d-flex align-items-center">
                              <span
                                className="span_package_digits rounded-circle bg-light mx-2 d-flex align-items-center justify-content-center"
                                style={{ width: '30px', height: '30px' }}
                              >
                                {mealCounts[mealType]}
                              </span>
                              <button
                                className="btn btn-outline-secondary rounded-circle p-0 d-flex align-items-center justify-content-center animated-button"
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  fontSize: '14px',
                                  backgroundColor: '#01461F',
                                  color: '#fff',
                                  margin: '6px'
                                }}
                                onClick={() => decrementMeal(mealType)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <button
                                className="btn btn-outline-secondary rounded-circle p-0 d-flex align-items-center justify-content-center ml-2 animated-button"
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  fontSize: '14px',
                                  backgroundColor: '#01461F',
                                  color: '#fff'
                                }}
                                onClick={() => incrementMeal(mealType)}
                                disabled={mealCounts[mealType] >= 2}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Right Side - Meal Image Preview */}
          <div className="col-lg-4 col-md-12 packages_pricing_img_div pt16 pb16 p-12" style={{ zIndex: -1 }}>
            <div className="">
              <div className="card-body text-center">
                <div
                  className="meal-visualization mb-4 d-flex flex-column align-items-center justify-content-center"
                  style={{ position: 'relative', height: '400px', width: '100%' }}
                >
                  {Object.entries(mealCounts).map(([mealType, count]) => (
                    mealImages[mealType] && count > 0 && (
                      <div
                      //  key={mealType}
                      //   className="meal-item w-75"
                      //   style={{
                      //     position: 'relative',
                      //     height: '140px',
                      //     marginTop:
                      //       mealType === 'lunch' ? '-80px' :
                      //       mealType === 'dinner' ? '-80px' :
                      //       '130px',
                      //     zIndex:
                      //       mealType === 'breakfast' ? 3 :
                      //       mealType === 'lunch' ? 2 :
                      //       mealType === 'dinner' ? 1 : 0,
                      //     left: '30%',
                          
                      //     transform: 'translateX(-50%)',


                        key={mealType}
                        className="meal-item w-75"
                        style={{
                          position: 'relative',
                          height: '140px',
                          marginTop:
                            mealType === 'lunch' ? '-40px' :
                              mealType === 'dinner' ? '-40px' :
                                mealType === 'salad' ? '-10px' :
                                  mealType === 'snack' ? '-140px' :
                                    '100px',
                          zIndex:
                            mealType === 'breakfast' ? 3 :
                              mealType === 'lunch' ? 2 :
                                mealType === 'dinner' ? 1 : 0,
                          left: '30%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <img
                          src={mealImages[mealType]}
                          alt={mealType}
                          className="img-fluid"
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                        {(count > 1 || mealType === 'salad' || mealType === 'snack') && (
                          <span
                            className="badge badge-dark rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              position: 'absolute',
                              top: '15px',
                              right: '-18px',
                              width: '40px',
                              height: '40px',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              backgroundColor: '#01461F',
                              zIndex: 10,
                              marginTop:
                                mealType === 'snack' ? '20px' :
                                  mealType === 'salad' ? '70px' :
                                    '100px',
                            }}
                          >
                            x{count}
                          </span>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div id="bottom_bar_home" className="row bottom-bar justify-content-between  mx-auto home-subscription-btn-sec text-center text-md-left mb-10" style={{marginTop:'100px'}}>
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <p className="english-font-bottombarp">
              Meal Type: <span className="font-weight-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            </p>
          </div>
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <p className="english-font-bottombarp">
              Total Calories: <span className="font-weight-bold">1275</span>
            </p>
          </div>
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <p className="english-font-bottombarp">
              Starting From: <span className="font-weight-bold">605.0 SAR</span>
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center mt-3 mt-md-0">
            <button
              className="btn btn-primary btn-lg rounded-pill px-4 py-2 w-100 w-md-auto"
              style={{
                backgroundColor: '#01461F',
                borderColor: '#BFFF00',
                fontWeight: '600',
                letterSpacing: '1px',
                transition: 'all 0.3s',
                maxWidth: '250px'
              }}
              onClick={() => window.location.href = '/'}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuOder;
