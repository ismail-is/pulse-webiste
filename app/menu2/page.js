import { AboutUs2 } from "@/components/AboutUs";
import Headline from "@/components/Headline";
import OfferCard from "@/components/OfferCard";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
const page = () => {
  const items = [
    {
      id: 1,
      title: "Breakfast",
      icon: "flaticon-cupcake",
      event: "food-tab1",
      items: [
       
        {
          id: 2,
          title: "Egg and Cheese Quesadilla",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu2.png",
        },
        {
          id: 3,
          title: "Omelet",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu3.png",
        },
        {
          id: 4,
          title: "Omelet Whites",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu4.png",
        },
        {
          id: 5,
          title: "Eggs Benedict",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu5.png",
        },
        {
          id: 6,
          title: "Rolls",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu6.png",
        },
        {
          id: 7,
          title: "Shawarma Beef",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 8,
          title: "balsamic vinaigrette Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu8.png",
        },
         {
          id: 1,
          title: "Chicken, Basil,and Cheese Quesadilla",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Toast",
      icon: "flaticon-broccoli",
      event: "food-tab2",
      items: [
        {
          id: 3,
          title: "Egg-1",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu3.png",
        },
        {
          id: 4,
          title: "Turkish-2",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu4.png",
        },
        {
          id: 5,
          title: "Tonna -3",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu1.png",
        },
        {
          id: 6,
          title: "Chicken -4",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu6.png",
        },
        {
          id: 7,
          title: "Grilled Beef-5",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu2.png",
        },
        
      ],
    },
    {
      id: 3,
      title: "Fish and shrimp",
      icon: "flaticon-fried-potatoes",
      event: "food-tab3",
      items: [
        {
          id: 2,
          title: "Shrimp Tom & Coconut Sauce",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu2.png",
        },
        {
          id: 3,
          title: "Thai shrimp",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu3.png",
        },
        {
          id: 1,
          title: "Shanghai Steam Salmon",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu1.png",
        },
        {
          id: 4,
          title: "Herbed Grilled Salmon",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu4.png",
        },
        {
          id: 8,
          title: "Fish With Peri Peri Sauce",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 5,
          title: "Grilled Fish With Lemon And Dill",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu5.png",
        },
        
      ],
    },
    {
      id: 4,
      title: "Chickens",
      icon: "flaticon-crab",
      event: "food-tab4",
      items: [
        {
          id: 5,
          title: "Cajun Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu5.png",
        },
        {
          id: 1,
          title: "Saffron Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu1.png",
        },
        {
          id: 2,
          title: "Pineapple Bbq Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu2.png",
        },
        {
          id: 3,
          title: "Chicken With Molokhia",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu3.png",
        },
        {
          id: 4,
          title: "Grilled Shish Tawook",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu4.png",
        },
        {
          id: 6,
          title: "Chicken With Lemon And Thyme",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu6.png",
        },
        {
          id: 7,
          title: "Tandoori Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu8.png",
        },
        {
          id: 8,
          title: "Chicken Polo",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 9,
          title: "Chicken Demaria",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 10,
          title: "Volcano Chicken Spicy",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 10,
          title: "Chicken Fettuccine",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 11,
          title: "Mexican-style Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 12,
          title: "Grilled Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 13,
          title: "Chicken Shish Taouk",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 14,
          title: "Broccoli Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 15,
          title: "Chicken Mastromella",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 16,
          title: "Chicken Fajita",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 17,
          title: "Pesto Chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 18,
          title: "Sumac chicken",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
        {
          id: 19,
          title: "Chicken And Mushrooms",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu7.png",
        },
      ],
    },
    {
      id: 5,
      title: "Beef Dishes",
      icon: "flaticon-poinsettia",
      event: "food-tab5",
      items: [
        {
          id: 2,
          title: "Sirloin Steak",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu2.png",
        },
        {
          id: 1,
          title: "Sweet And Spicy Meat",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu1.png",
        },
        {
          id: 3,
          title: "Beef Piccata",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu3.png",
        },
        {
          id: 4,
          title: "Beef Stroganoff",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu4.png",
        },
        {
          id: 5,
          title: "Beef Fajita",
          price: "25",
          decs: "Diverse menu features array delectable",
          img: "assets/images/food/chicken-menu5.png",
        },
       
      ],
    },
  ];
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Menu 2"} />
      {/* <AboutUs2
        aboutImg1="/assets/images/about/menu-chicken1.jpg"
        aboutImg2="/assets/images/about/menu-chicken2.jpg"
      /> */}
      {/* <Headline /> */}
      <RestaurantMenu menus={items} />
      {/* <OfferCard /> */}
    </WellFoodLayout>
  );
};
export default page;
