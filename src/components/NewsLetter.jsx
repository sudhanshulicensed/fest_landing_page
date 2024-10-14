import Button from "@/components/Common/Button";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <article className="newsletter text-center">
      <p className="newsletter__label">NEWSLETTER</p>
      <p className="newsletter__title font-w-medium">Subscribe for Exclusive Updates!</p>
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
        <Button title={"Subscribe"} />
      </div>
    </article>
  );
}
