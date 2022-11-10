import React from 'react'
import css from '../style/Homepage.module.css'  
import userIcon from '../assets/images/Icon/user.png'
import locIcon from '../assets/images/Icon/location.png'
import loveicon from '../assets/images/Icon/love.webp'
import bgImage1 from '../assets/images/bg-image-1.png'
import img1 from '../assets/images/product/4.png'
import img2 from '../assets/images/product/27.png'
import img3 from '../assets/images/product/30.png'
import map from '../assets/images/map.png'
import sponsor from '../assets/images/Sponsored.png'
import testimoni from '../assets/images/testimoni.png'
import Navbar from '../component/NavbarResponsive/Navbar'
import Footer from '../component/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('token')
  return (
    <div>
    <Navbar/>
    <main className={css.container}>
      <div className="row align-items-center">
        <div className="col-12 bg-clear">
          <div className={css.bg}>
            
          <div className={css.main0}>
            <div className={css.display}>
              <div className={css.titlexl}>
                <h1 className={css.txtwhite}>Start Your Day with Coffee and Good Meals</h1>
              </div>
              <div className={css.titles}>
                <p className={css.txtwhite}>We provide high quality beans, good taste, and healthy meals made by love just
                  for you. Start your day with us for a bigger smile!</p>
              </div>
              <div className={css.btnup}>
                <button className={css.btntext}>Get Started</button>
              </div>
            </div>
          </div>
          <div className={css.box0}>
            <div className={css.mainbox}>
              <div className={css.insidebox1}>
                <img src={userIcon} alt=""/>
                <div className={css.text}>
                  <p className={css.btntext}>90+</p>
                  <p>Staff</p>
                </div>
              </div>
              <div className={css.insidebox1}>
                <img src={locIcon} alt=""/>
                <div className={css.text}>
                  <p className={css.btntext}>30+</p>
                  <p>Store</p>
                </div>
              </div>
              <div className={css.insidebox1}>
                <img src={loveicon} alt=""/>
                <div className={css.text}>
                  <p className={css.btntext}>800+</p>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

    <div className="col-12 bg-clear justify-content-center d-flex p-0" style={{height:'700px'}}>
      <div className={css.mainimg}>
        <img className={css.img1} src={bgImage1} alt=""/>
      </div>
      <div className={css.rightcontent1}>
        <p className={css.txt1}>We Provide Good Coffee and Healthy Meals</p>
        <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
        <ul className={css.checklist}>
          <li>High quality beans</li>
          <li>Healthy meals, you can request the ingredients</li>
          <li>Chat with our staff to get better experience for ordering</li>
          <li>Free member card with a minimum purchase of IDR 200.000.</li>
        </ul>
      </div>
    </div>


    <div className="col-12 bg-clear text-center">
      <div className={css.title1}>
        <p className={css.txt2}>Here is People's Favorite</p>
        <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
      </div>
      <div className={css.mainbanner}>
        <div className={css.productbanner}>
          <img src={img1} alt=""/>
          <div className={css.boxtext}>
            <p>Hazelnut Latte</p>
            <ul className={css.checklist1}>
              <li>Hazelnut Syrup</li>
              <li>vanilla Whipped Cream</li>
              <li>Ice / Hot</li>
              <li>Sliced Banana on Top</li>
            </ul>
          </div>
          <div className={css.btnprice}>
            <p className={css.boldtxt}>IDR 25.000</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className={css.productbanner}>
          <img src={img2} alt=""/>
          <div className={css.boxtext}>
            <p>Pinky Promise</p>
            <ul className={css.checklist1}>
              <li>1 Shot of Coffee</li>
              <li>vanilla Whipped Cream</li>
              <li>Chocolate Biscuits</li>
              <li>Strawberry Syrup</li>
            </ul>
          </div>
          <div className={css.btnprice}>
            <p className={css.boldtxt}>IDR 30.000</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className={css.productbanner}>
          <img src={img3} alt=""/>
          <div className={css.boxtext}>
            <p>Chicken Wings</p>
            <ul className={css.checklist1}>
              <li>Wings</li>
              <li>Drum Sticks</li>
              <li>Mayonaise and Lemon</li>
              <li>Hot Fried</li>
              <li>Secret Recipe</li>
              <li>Buy 1 Get 1 only for Dine in</li>
            </ul>
          </div>
          <div className={css.btnprice1}>
            <p className={css.boldtxt}>IDR 40.000</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div className={css.main3}>
        <div className={css.titlebig}>
          <h3 className={css.boldtxt}>
            Visit Our Store in the Spot on the Map Below
          </h3>
        </div>
        <div className={css.titlesmall}>
          <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        </div>
        <div className={css.mapimg}>
          <img src={map} alt=""/>
        </div>
        <div className={css.partner}>
          <p>Our Partner</p>
          <div className={css.imgflex}>
            <img src={sponsor} alt=""/>
          </div>
        </div>
        <div className={css.testimonial}>
          <div className={css.bgtext}>
            <h3 className={css.boldtxt}>Loved by Thousands of Happy Customer</h3>
          </div>
          <div className={css.smtext}>
            <p>These are the stories of our customers who have visited us with great pleasure.</p>
          </div>
          <div className={css.testimoniimg}>
            <img src={testimoni} alt=""/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
  <Footer/>
    </div>
  )
}



// class Homepage extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//       <main className={css.container}>
//         <div className="row align-items-center">
//           <div className="col-12 bg-clear">
//             <div className={css.bg}>
              
//             <div className={css.main0}>
//               <div className={css.display}>
//                 <div className={css.titlexl}>
//                   <h1 className={css.txtwhite}>Start Your Day with Coffee and Good Meals</h1>
//                 </div>
//                 <div className={css.titles}>
//                   <p className={css.txtwhite}>We provide high quality beans, good taste, and healthy meals made by love just
//                     for you. Start your day with us for a bigger smile!</p>
//                 </div>
//                 <div className={css.btnup}>
//                   <button className={css.btntext}>Get Started</button>
//                 </div>
//               </div>
//             </div>
//             <div className={css.box0}>
//               <div className={css.mainbox}>
//                 <div className={css.insidebox1}>
//                   <img src={userIcon} alt=""/>
//                   <div className={css.text}>
//                     <p className={css.btntext}>90+</p>
//                     <p>Staff</p>
//                   </div>
//                 </div>
//                 <div className={css.insidebox1}>
//                   <img src={locIcon} alt=""/>
//                   <div className={css.text}>
//                     <p className={css.btntext}>30+</p>
//                     <p>Store</p>
//                   </div>
//                 </div>
//                 <div className={css.insidebox1}>
//                   <img src={loveicon} alt=""/>
//                   <div className={css.text}>
//                     <p className={css.btntext}>800+</p>
//                     <p>Customer</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>

//       <div className="col-12 bg-clear justify-content-center d-flex p-0" style={{height:'700px'}}>
//         <div className={css.mainimg}>
//           <img className={css.img1} src={bgImage1} alt=""/>
//         </div>
//         <div className={css.rightcontent1}>
//           <p className={css.txt1}>We Provide Good Coffee and Healthy Meals</p>
//           <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
//           <ul className={css.checklist}>
//             <li>High quality beans</li>
//             <li>Healthy meals, you can request the ingredients</li>
//             <li>Chat with our staff to get better experience for ordering</li>
//             <li>Free member card with a minimum purchase of IDR 200.000.</li>
//           </ul>
//         </div>
//       </div>


//       <div className="col-12 bg-clear text-center">
//         <div className={css.title1}>
//           <p className={css.txt2}>Here is People's Favorite</p>
//           <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
//         </div>
//         <div className={css.mainbanner}>
//           <div className={css.productbanner}>
//             <img src={img1} alt=""/>
//             <div className={css.boxtext}>
//               <p>Hazelnut Latte</p>
//               <ul className={css.checklist1}>
//                 <li>Hazelnut Syrup</li>
//                 <li>vanilla Whipped Cream</li>
//                 <li>Ice / Hot</li>
//                 <li>Sliced Banana on Top</li>
//               </ul>
//             </div>
//             <div className={css.btnprice}>
//               <p className={css.boldtxt}>IDR 25.000</p>
//               <button>Order Now</button>
//             </div>
//           </div>
//           <div className={css.productbanner}>
//             <img src={img2} alt=""/>
//             <div className={css.boxtext}>
//               <p>Pinky Promise</p>
//               <ul className={css.checklist1}>
//                 <li>1 Shot of Coffee</li>
//                 <li>vanilla Whipped Cream</li>
//                 <li>Chocolate Biscuits</li>
//                 <li>Strawberry Syrup</li>
//               </ul>
//             </div>
//             <div className={css.btnprice}>
//               <p className={css.boldtxt}>IDR 30.000</p>
//               <button>Order Now</button>
//             </div>
//           </div>
//           <div className={css.productbanner}>
//             <img src={img3} alt=""/>
//             <div className={css.boxtext}>
//               <p>Chicken Wings</p>
//               <ul className={css.checklist1}>
//                 <li>Wings</li>
//                 <li>Drum Sticks</li>
//                 <li>Mayonaise and Lemon</li>
//                 <li>Hot Fried</li>
//                 <li>Secret Recipe</li>
//                 <li>Buy 1 Get 1 only for Dine in</li>
//               </ul>
//             </div>
//             <div className={css.btnprice1}>
//               <p className={css.boldtxt}>IDR 40.000</p>
//               <button>Order Now</button>
//             </div>
//           </div>
//         </div>
//         <div className={css.main3}>
//           <div className={css.titlebig}>
//             <h3 className={css.boldtxt}>
//               Visit Our Store in the Spot on the Map Below
//             </h3>
//           </div>
//           <div className={css.titlesmall}>
//             <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
//           </div>
//           <div className={css.mapimg}>
//             <img src={map} alt=""/>
//           </div>
//           <div className={css.partner}>
//             <p>Our Partner</p>
//             <div className={css.imgflex}>
//               <img src={sponsor} alt=""/>
//             </div>
//           </div>
//           <div className={css.testimonial}>
//             <div className={css.bgtext}>
//               <h3 className={css.boldtxt}>Loved by Thousands of Happy Customer</h3>
//             </div>
//             <div className={css.smtext}>
//               <p>These are the stories of our customers who have visited us with great pleasure.</p>
//             </div>
//             <div className={css.testimoniimg}>
//               <img src={testimoni} alt=""/>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </main>
//     <Footer/>
//       </div>
//     )
//   }
// }

export default Homepage