// @ts-nocheck
// import logo from '../../assets/img/logo.png'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <img src='https://i.imgur.com/KxfWH9J.png' alt='Logo'/>
        <p>Flowerbox/ext.2019</p>
        <div className={style.icons}>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </div>
      <div className={style.middle}>
        <h4>customer service</h4>
        <ul>
          <li> SATISFACTION COMMITMENT</li>
          <li>DELIVERY POLICIES</li>
          <li>CANCELLATIONS</li>
          <li>RETURN POLICY</li>
        </ul>
      </div>
      <div className={style.right}>
        <h4>flowerbox</h4>
        <ul>
          <li> TERMS OF SERVICE</li>
          <li>PRIVACY POLICY</li>
          <li>CAREER OPPORTUNITIES</li>
          <li>MORE INFORMATIONY</li>
        </ul>
      </div>
    </div>
  )
}
