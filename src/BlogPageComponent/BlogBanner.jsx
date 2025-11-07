import React from "react";
import BlogProduct from "./BlogProduct";

export default function BlogBanner() {
  return (
    <>
      <div className="container">
        <h1>Blog</h1>
        <div className="blog-banner-content">
          <BannerImg></BannerImg>
          <Info></Info>
        </div>
      </div>

      <BlogProduct></BlogProduct>
      <CardContent></CardContent>

      <AnotherContent></AnotherContent>
      <Newslatter></Newslatter>
    </>
  );
}

const BannerImg = () => {
  return (
    <div className="img-container">
      <img src="blogbanner.png" alt="" />
    </div>
  );
};

const Info = () => {
  return (
    <div className="blog-banner-info ">
      <div className="buttons">
        <button className="service-btn">Service Car</button>
        <button className="engine-btn">Engine</button>
        <p>Jan 20, 2024 · 15 min read</p>
      </div>
      <h2>High Mileage Engine Care: The Ultimate Oil Change Guide</h2>
      <p>
        At Absolute Car Care in Framingham, MA, we understand the challenges of
        maintaining a vehicle with high mileage. Proper engine care, especially
        when it comes to oil changes, is one of the most crucial aspects of
        extending the life and performance of your car. This guide provides
        essential tips and insights for high-mileage engine care,
      </p>

      <div className="profile">
        <div className="img-container">
          <img src="Oval.png" alt="" />
        </div>
        <div className="profile-info">
          <h2>Leslie Alexander</h2>
          <p>Content Editor</p>
        </div>
      </div>
    </div>
  );
};

const CardContent = () => {
  return (
    <div className="container">
      <div className="card-content">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

const BlogCard = () => {
  return (
    <div className="blogcard">
      <div className="img-container">
        <img src="card-car.png" alt="" />
      </div>
      <div className="info">
        <div className="buttons">
          <button className="service-btn">Service Car</button>
          <button className="engine-btn">Engine</button>
          <p>Jan 20, 2024 · 15 min read</p>
        </div>
        <h2>
          Addressing Odd Noises from Your Car’s Drive Shaft: Expert Insights
          from Absolute Car Care, Framingham, MA
        </h2>
        <div className="profile">
          <div className="img-container">
            <img src="Oval.png" alt="" />
          </div>
          <div className="profile-info">
            <h2>Leslie Alexander</h2>
            <p>Content Editor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnotherContent = () => {
  const images = ["bestcar.png", "greencar2.png", "yellowcar.png"];

  return (
    <div className="container">
      <div className="another-content">
        {images.map((img) => (
          <AnotherImage img={img} key={img} />
        ))}
      </div>
    </div>
  );
};

const AnotherImage = ({ img }) => {
  return (
    <div className="another-img">
      <img src={img} alt="" />
    </div>
  );
};

const Newslatter = () => {
  return (
    <div className="container">
      <div className="newslatter">
        <div className="info ">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Stay ahead with the latest in car care tips, exclusive product
            offers, and industry news. Join our community of car enthusiasts and
            get expert advice delivered straight to your inbox!
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
