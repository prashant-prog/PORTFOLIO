import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me for anything!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:prashant2006sharma@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:prashant2006sharma@gmail.com">Email</a>
        </div>
        <div>
        <a href="tel:+919828523301"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919828523301">Phone Number</a>
        </div>  
      </div>
    </Container>
  )
}