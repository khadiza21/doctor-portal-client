import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimoial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "Healthy smiles start at home, but when should your child get brushing? Mom or Dad can help brush those tiny teeth with a finger toothbrush when they first pop out, but by the time your little one is walking ",
      img: people1,
      location: "Californiya",
    },
    {
      _id: 2,
      name: "Linson Herry",
      review:
        "Healthy smiles start at home, but when should your child get brushing? Mom or Dad can help brush those tiny teeth with a finger toothbrush when they first pop out, but by the time your little one is walking ",
      img: people2,
      location: "Californiya",
    },
    {
      _id: 3,
      name: "Pecson Perry",
      review:
        "Healthy smiles start at home, but when should your child get brushing? Mom or Dad can help brush those tiny teeth with a finger toothbrush when they first pop out, but by the time your little one is walking ",
      img: people3,
      location: "Californiya",
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say...</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 lg:w-48 " />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimoial;
