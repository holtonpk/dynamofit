import React, { useState } from "react";
import { configStars } from "./productPanel/index";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../../public/data/reviews.json";
const Review = ({ product }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalDisplayReviews, setTotalDisplayReviews] = useState(3);

  const displayReviews = reviews.slice(
    currentIndex,
    currentIndex + totalDisplayReviews
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - 3));
  };

  const handleLoadMore = () => {
    setTotalDisplayReviews(totalDisplayReviews + 3);
  };

  const handleShowLess = () => {
    setTotalDisplayReviews(3);
  };

  return (
    <div className="p-8 mt-6 md:w-screen">
      <h1 className="font-bold text-xl pb-3">
        Customer Reviews
        {"(" + reviews.length + ")"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 h-fit w-full overflow-hidden items-top gap-6 relative ">
        {displayReviews.map((review: any) => (
          <CustomerReview review={review} key={review.id} />
        ))}

        {currentIndex !== reviews.length - 3 && (
          <button
            className="absolute right-4 hidden md:block top-1/2 -translate-y-1/2 flex justify-center items-center p-2 rounded-full hover:bg-black bg-neutral-500/80 shadow-lg"
            onClick={handleNextClick}
            disabled={currentIndex === reviews.length - 3}
          >
            <FaChevronRight className="w-4 h-4 text-white" />
          </button>
        )}
        {currentIndex !== 0 && (
          <button
            className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 flex justify-center items-center p-2 rounded-full hover:bg-black bg-neutral-500/80 shadow-lg"
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="w-4 h-4 text-white" />
          </button>
        )}
      </div>
      <div className="flex flex-col w-full items-center p-3">
        {totalDisplayReviews < reviews.length && (
          <button
            onClick={handleLoadMore}
            className="bg-main-500 hover:bg-black rounded-md py-1  px-3 w-fit mx-auto md:hidden text-white "
          >
            Load more
          </button>
        )}
        {totalDisplayReviews > 3 && (
          <button
            onClick={handleShowLess}
            className=" rounded-md p-3 w-fit mx-auto md:hidden text-black"
          >
            show less
          </button>
        )}
      </div>
    </div>
  );
};
export default Review;

const CustomerReview = ({ review }: any) => {
  const [readMore, setReadMore] = useState(false);

  const reviewRef = React.useRef<HTMLDivElement>(null);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="w-full  shadow-lg overflow-hidden rounded-md bg-[#F3F3F3]  h-fit flex flex-col items-start  p-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex w-fit items-center gap-4">
          {/* <span className="w-10 h-10 rounded-full bg-black/40"></span> */}
          <BsPersonCircle className="w-10 h-10 text-black/40" />
          <div className="flex flex-col">
            <h1 className="font-bold text-black text-sm ">{review.name}</h1>
            <h1 className="font- text-sm text-black/50  whitespace-nowrap">
              {timeAgo(review.date)}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex mt-2 flex-row items-center ">
        {configStars(review.rating, 16)}
        <h1 className="font-bold text-sm text-main-600">({review.rating})</h1>
      </div>
      <h1 className="font-bold  md:text-base whitespace-nowrap  text-black">
        {review.title}
      </h1>

      <h2
        ref={reviewRef}
        className={`${
          readMore ? "h-fit" : "max-h-[60px]"
        }  overflow-hidden text-sm text-black  text-ellipsis  `}
      >
        {review.description}
      </h2>
      {reviewRef.current && reviewRef.current?.clientHeight >= 60 && (
        <button onClick={toggleReadMore} className="text-black/30 ">
          {readMore ? "Hide" : "Read more"}
        </button>
      )}
    </div>
  );
};

function timeAgo(date: string): string {
  const currentDate = new Date();
  const inputDate = new Date(date);
  const elapsedTimeInSeconds =
    (currentDate.getTime() - inputDate.getTime()) / 1000;

  const secondsInAMinute = 60;
  const secondsInAnHour = 60 * secondsInAMinute;
  const secondsInADay = 24 * secondsInAnHour;
  const secondsInAWeek = 7 * secondsInADay;
  const secondsInAMonth = 30 * secondsInADay;
  const secondsInAYear = 365 * secondsInADay;

  const pluralize = (value: number, unit: string) => {
    return value === 1 ? `${value} ${unit} ago` : `${value} ${unit}s ago`;
  };

  if (elapsedTimeInSeconds < secondsInAMinute) {
    return pluralize(Math.floor(elapsedTimeInSeconds), "second");
  } else if (elapsedTimeInSeconds < secondsInAnHour) {
    return pluralize(
      Math.floor(elapsedTimeInSeconds / secondsInAMinute),
      "minute"
    );
  } else if (elapsedTimeInSeconds < secondsInADay) {
    return pluralize(
      Math.floor(elapsedTimeInSeconds / secondsInAnHour),
      "hour"
    );
  } else if (elapsedTimeInSeconds < secondsInAWeek) {
    return pluralize(Math.floor(elapsedTimeInSeconds / secondsInADay), "day");
  } else if (elapsedTimeInSeconds < secondsInAMonth) {
    return pluralize(Math.floor(elapsedTimeInSeconds / secondsInAWeek), "week");
  } else if (elapsedTimeInSeconds < secondsInAYear) {
    return pluralize(
      Math.floor(elapsedTimeInSeconds / secondsInAMonth),
      "month"
    );
  } else {
    return pluralize(Math.floor(elapsedTimeInSeconds / secondsInAYear), "year");
  }
}
