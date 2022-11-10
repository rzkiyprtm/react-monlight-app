import React from 'react'
import css from '../style/History.module.css'
import Cardhst from '../component/Cardhistory/Cardhst'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/NavbarResponsive/Navbar'

const History = () => {
  return (
    <div>
    <Navbar/>
    <div className={css.main}>
      <div className={css.mainBg}>
        <div className={css.title}>
          <h1>Let’s see what you have bought!</h1>
            <p>Long press to delete item</p>
        </div>
        <div className={css.cardsBox}>
          <div className={css.mainbox}>
          <Cardhst/>
          <Cardhst/>
          <Cardhst/>
        </div>
        <div className={css.mainbox2}>
        <Cardhst/>
        <Cardhst/>
        <Cardhst/>
        </div>
        <div className={css.mainbox3}>
        <Cardhst/>
        <Cardhst/>
        <Cardhst/>
        </div>
        <div className={css.mainbox4}>
        <Cardhst/>
        <Cardhst/>
        <Cardhst/>
        </div>
        <div className={css.mainbox5}>
        <Cardhst/>
        <Cardhst/>
        <Cardhst/>
        </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

// export default class History extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//       <div className={css.main}>
//         <div className={css.mainBg}>
//           <div className={css.title}>
//             <h1>Let’s see what you have bought!</h1>
//               <p>Long press to delete item</p>
//           </div>
//           <div className={css.cardsBox}>
//             <div className={css.mainbox}>
//             <Cardhst/>
//             <Cardhst/>
//             <Cardhst/>
//           </div>
//           <div className={css.mainbox2}>
//           <Cardhst/>
//           <Cardhst/>
//           <Cardhst/>
//           </div>
//           <div className={css.mainbox3}>
//           <Cardhst/>
//           <Cardhst/>
//           <Cardhst/>
//           </div>
//           <div className={css.mainbox4}>
//           <Cardhst/>
//           <Cardhst/>
//           <Cardhst/>
//           </div>
//           <div className={css.mainbox5}>
//           <Cardhst/>
//           <Cardhst/>
//           <Cardhst/>
//           </div>
//             </div>
//         </div>
//       </div>
//       <Footer/>
//       </div>
//     )
//   }
// }

export default History