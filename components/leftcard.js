import "../components/leftcard.css";
import logo from "../images/logo.svg";
import image1 from "../images/icon-arrow.svg"
function LeftCard() {
  return (
    <div class="mother-container">
        <div class="child-container">
          <img className="logo" src={logo} />
          <h3>
            <span className="color">WE'RE</span> COMING SOON
          </h3>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our
            launch deals.
          </p>
          <form id="form">
            <input id="email" placeholder="Email Address" />
            <img class="error-icon" src="./images/error-icon.svg" />
            <button>
              <img src={image1} alt="arrow" />
            </button>
            <small>Please provide a valid email</small>
          </form>
        </div>
    </div>
  );
}

export default LeftCard;
