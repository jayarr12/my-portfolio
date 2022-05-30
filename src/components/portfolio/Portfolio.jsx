import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";
import axios from "axios";
import React from "react";
import { render } from "react-dom";
import $ from 'jquery';

const portfolioWebsites = "https://dev-jayd9.pantheonsite.io/portfolio/websites/api?_format=hal_json";
const portfolioCategory = "https://dev-jayd9.pantheonsite.io/portfolio/category/api?_format=hal_json";

export default class Portfolio extends React.Component {

  state = {
    websites: [],
    categories: []
  };
  

  componentDidMount() {

    // $('#tab-content div').hide();
    // $('#tab-content div:first').show();
    //$('#tab-content .cat21').hide();
    
    $(document).on('click', '#nav li', function() {
      $('#nav li a').removeClass("active");
      $(this).find('a').addClass("active");
      $('#tab-content div').hide();
    
      var indexer = $(this).attr("id"); //gets the current index of (this) which is #nav li
      $('#tab-content .' + indexer + '').css("display","flex"); //uses whatever index the link has to open the corresponding box 
      $('#tab-content div').removeClass("hide");
      $("#nav li").removeClass("tabs-li");
    });

    // $('#tab-content div').hide();
    // $('#tab-content .cat21').fadeIn();

    axios.get(portfolioWebsites)
    .then(res => {
      const websites = res.data;
      this.setState({ websites });
    }); 

    axios.get(portfolioCategory)
    .then(res => {
      const categories = res.data;
      this.setState({ categories });
    }); 
  };

  render() {
    //const [ selected, setSelected ] = this.state["21"];
    return (
      
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
          <ul className="tabs" id="nav">
          {
            this.state.categories
              .map(category =>
                 <li className="tabs-li" id={"cat"+category.id} key={category.id}><a href="#">{category.name}</a></li>

                // <PortfolioList 
                //   title={category.name} 
                //   // active={selected === category.id}
                //   // setSelected={setSelected}
                //   id={category.id}
                // />
              )
          }
        </ul>     
      
        <div className="container" id="tab-content">
          
            {
              this.state.websites
                .map(website =>
                  <div className={"hide cat"+website.cat + " item"} key={website.id}>
                    <img width='220px' height='auto' src={website.img} alt="" />
                    <h3>{website.title}</h3>
                  </div>
                )
            }
          
        </div>
      </div>
    )
  }

  // <img width='auto' height='100px' src={website.img} alt="" />

  // const [ selected, setSelected ] = useState("featured");
  // const [ data, setData ] = useState([]);
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "mobile",
  //     title: "Mobile App",
  //   },
  //   {
  //     id: "design",
  //     title: "Design",
  //   }, 
  //   {
  //     id: "content",
  //     title: "Content",
  //   }, 
  // ];

  // useEffect(()=>{

  //   switch(selected){
  //     case "featured":
  //       setData(featuredPortfolio);
  //       break;
  //     case "web":
  //       setData(webPortfolio);
  //       break;
  //     case "mobile":
  //       setData(mobilePortfolio);
  //       break;
  //     case "design":
  //       setData(designPortfolio);
  //       break;
  //     case "content":
  //       setData(contentPortfolio);
  //       break;
  //   }

  // },[selected])

  // return (
  //   <div className='portfolio' id="portfolio">
  //     <h1>Portfolio</h1>
  //     <ul>
  //       {list.map((item) => (
  //         <PortfolioList 
  //           title={item.title} 
  //           active={selected === item.id}
  //           setSelected={setSelected}
  //           id={item.id}
  //         />
  //       ))}
  //     </ul>
  //     <div className="container">
  //         {data.map((d) => (
  //       <div className="item">
  //         <img className="comp" src={d.img} alt="" />
  //         <h3>{d.title}</h3>
  //       </div>
  //       ))}
  //     </div>
  //   </div>
  // )
}

