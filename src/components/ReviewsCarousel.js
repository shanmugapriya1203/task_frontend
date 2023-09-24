import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../images/customer1.jpeg';
import img2 from '../images/customer2.svg';
import img3 from '../images/image3.jpg';

const reviews = [
    {
        id: 1,
        imgURL: img1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback:  "PlannerPlus has transformed the way I manage my tasks. It's incredibly efficient and user-friendly.",
    },
    {
        id: 2,
        imgURL: img2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback:  "I've tried many task management apps, and PlannerPlus is by far the best. It helps me stay organized and productive.",
    },
    {
        id: 3,
        imgURL: img3,
        customerName: 'Sam arich',
        rating: 4.2,
        feedback:   "The meeting scheduling feature in PlannerPlus has made coordinating with my team a breeze. Highly recommend!",
    }
];

const ReviewsCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-16 px-4 lg:px-32 text-black">
     <h3 className="text-3xl font-bold text-center mb-6">
  Customer Testimonials
</h3>
<p className="text-center text-gray-600 mb-10">
  Read what our valued customers have to say about their wonderful experiences with our service.
</p>

        <div className="container mx-auto">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img
                    src={review.imgURL}
                    alt="customer"
                    className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-600 mb-4">{review.feedback}</p>
                  <div className="flex items-center justify-center mb-2"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.customerName}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default ReviewsCarousel;

