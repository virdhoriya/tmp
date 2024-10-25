import { Link } from "react-router-dom";

const Games = () => {
  return (
    <>
      <section className="section-about">
        <div className="containers">
          <div className="flex flex-col gap-8 justify-center items-center py-4">
            <h2>
              <span className="our">Dive into Entertainment: </span>
              teen patti {"master's"} world of online games
            </h2>
            <div className="flex justify-center items-center gap-2">
              <Link to="/" className="element">
                Home
              </Link>
              <img
                src="/right-arrow.png"
                alt="Right Arrow"
                className="right-arrow"
              />
              <span className="element">Online Games</span>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-games">
        <div className="containers">
          <h2 className="primary-h2 max-w-[70rem]">
            <span className="our">popular</span>games
          </h2>
          <p>
            Teen Patti Master is one of the most popular online Android mobile
            gaming apps in India that provides 28 varieties of casino and card
            games.
          </p>
        </div>
      </section>

      <section className="welcome-section">
        <div className="containers">
          <div className="flex flex-col gap-32">
            <img src="/welcome.webp" alt="Welcome" className="welcome-img" />
            <div className="flex justify-between items-center">
              <img src="game01.webp" alt="Game Image" className="game-img" />
              <img src="game02.webp" alt="Game Image" className="game-img" />
              <img src="game03.webp" alt="Game Image" className="game-img" />
              <img src="game04.webp" alt="Game Image" className="game-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="containers">
          <div className="flex flex-col gap-8">
            <h2>
              <span className="our">our </span>partners
            </h2>
            <div className="flex justify-between items-center">
              <img src="/paytm.webp" alt="Logo" className="partner-logo" />
              <img src="/phone-pay.webp" alt="Logo" className="partner-logo" />
              <img src="/paypal.webp" alt="Logo" className="partner-logo" />
              <img src="/gpay.webp" alt="Logo" className="partner-logo" />
              <img src="/upi.webp" alt="Logo" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Games;
