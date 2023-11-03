
import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  let cardProps = [{ description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.features The point of using Lorem Ipsum", image:"https://images.unsplash.com/photo-1682685797208-c741d58c2eff?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { description: "Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default",image:"https://images.unsplash.com/photo-1682695794816-7b9da18ed470?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ", image:"https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from, a Latin professor at Hampden-Sydney ",image:"https://images.unsplash.com/photo-1682685797886-79020b7462a4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }]
  return (
    <div>
      <NavBar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          {cardProps.map((value, index) => {
            return (
              <div className="col-md-3 d-flex justify-content-center" key={index}>
                <Card description={value.description} image={value.image} />
              </div>)
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

