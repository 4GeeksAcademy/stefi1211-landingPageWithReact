
import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  let cardProps = [{ title: "Geological Marvels", description: "Discover the Story of Stone Mountains.Uncover the fascinating geological history of these rugged formations, including the forces that shaped them over millions of years. Our expert insights will take you on a journey through time and explain the awe-inspiring processes behind their creation.", image: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { title: "Unique Landscapes", description: "Unparalleled Scenic Beauty. Immerse yourself in the extraordinary landscapes carved by nature herself. From the dramatic cliffs to the enchanting rock formations, our Stone Mountains will take your breath away. Witness the stunning interplay of light and shadow on these natural canvases.", image: "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { title: "Cultural Significance", description: "The Legends and Lore. Learn about the cultural significance of stone mountains in various societies around the world. Explore the myths, legends, and spiritual connections that have been woven into their history.", image: "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { title: "Explorers' Paradise", description: "Planning Your Adventure. If you're an adventurer at heart, find tips on how to plan your journey to experience these stone mountains firsthand. Whether you're an experienced hiker or a novice explorer, we've got you covered with essential information and recommendations.", image: "https://images.unsplash.com/photo-1682685797886-79020b7462a4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }]
  return (
    <div>
      <NavBar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          {cardProps.map((value, index) => {
            return (
              <div className="col-md-3 d-flex justify-content-center" key={index}>
                <Card title={value.title} description={value.description} image={value.image} />
              </div>)
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

