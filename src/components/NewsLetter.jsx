import Button from "@/components/Common/Button";
import Label from "@/components/Common/Label";
import SubTitle from "@/components/Common/SubTitle";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <article className="newsletter text-center">
    <Label text={'NEWSLETTER'}/>
    <SubTitle textColor={'#0E0E0E'} text={'Subscribe for Exclusive Updates!'}/>
      <div className="newsletter__form">
        <input
          placeholder="Full Name"
          id="fullname"
          type="text"
          className="newsletter__input newsletter__input--full-name"
        />
        <input
          placeholder="Enter Email"
          id="email"
          type="text"
          className="newsletter__input newsletter__input--email"
        />
        <Button title={"Subscribe"} buttonHeight={'55px'} buttonWidth={'202px'}/>
      </div>
    </article>
  );
}
