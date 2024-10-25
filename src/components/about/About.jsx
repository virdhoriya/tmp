import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="section-about">
        <div className="containers">
          <div className="flex flex-col gap-8 justify-center items-center py-4">
            <h2>
              <span className="our">About Teen Patti Master : </span>
              get to knoe the mastermind
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
              <span className="element">About</span>
            </div>
          </div>
        </div>
      </section>

      <section className="our-advantage-section adv-bg">
        <div className="containers">
          <div className="flex-container">
            <h2 className="adv-head">
              <span className="our">why choose</span> us
            </h2>
            <p className="text">
              Teen Patti Master allows safe and fast cash withdrawals!
            </p>

            <div className="adv-card-container">
              <div className="adv-card">
                <img src="/card-image01.svg" alt="Card Image" />
                <h3>Customer Service</h3>
                <p className="text">24h * 7 online</p>
              </div>
              <div className="adv-card">
                <img src="/card-image02.png" alt="Card Image" />
                <h3>Fast Withdrawal</h3>
                <p className="text">Credited in 1 min</p>
              </div>
              <div className="adv-card">
                <img src="/card-image03.svg" alt="Card Image" />
                <h3>Various Games</h3>
                <p className="text">Rummy, TeenPatti,DT etc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-havefun">
        <div className="containers">
          <div className="flex items-center gap-20">
            <img src="/games-img.webp" alt="Games" className="games-image" />

            <div className="grow flex flex-col gap-12 items-start">
              <h2 className="primary-h2" style={{ lineHeight: "4rem" }}>
                <span className="our">Have fun and win prizes at our</span>
                <br />
                teenpatti master!
              </h2>
              <p>
                Teen Patti Master is one of the most popular online cash gaming
                application that enables to freely play 30+ various games like
                Teen Patti, Andar Bahar,Car Roulette,Dragon VS Tiger. etc.
              </p>
              <p>
                If you said yes to any or all of these questions and are
                searching for the finest online Teen Patti game, you’ve arrived
                at the perfect place!
              </p>
              <p>
                Welcome to Teen Patti Master, the ultimate hub for Teen Patti
                enthusiasts!
              </p>
              <button className="btn2 btn2-dark">download</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="containers">
          <div className="flex items-center justify-between">
            <div className="stats-card">
              <h3>1,200+</h3>
              <p>register members</p>
            </div>
            <div className="stats-card">
              <h3>600+</h3>
              <p>Played Poker Today</p>
            </div>
            <div className="stats-card">
              <h3>400+</h3>
              <p>total winners</p>
            </div>
            <div className="stats-card">
              <h3>200+</h3>
              <p>taday winners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faq">
        <div className="containers">
          <div className="flex items-center gap-20">
            <div className="grow flex flex-col gap-20">
              <h2 className="primary-h2"><span className="our">FREQUENTLY ASK </span>questions</h2>
              <p className="text text-left">
                Teen Patti Master is more than simply an app for playing cards; it’s a premium service that gives proficient users the chance to create a personal profile and begin making money by introducing friends and relatives. The following commonly asked questions may help you better understand the Teen Patti Master certification procedure if you’re interested in becoming one:
              </p>
              <div className="acc-container">
                <div className="acc-item">
                  <h3>How do I become a Teen Patti Master?</h3>
                </div>
                <div className="acc-item">
                  <h3>How long does it take to activate my Teen Patti Master profile?</h3>
                </div>
                <div className="acc-item">
                  <h3>How can I edit my Teen Patti Master profile?</h3>
                </div>
                <div className="acc-item">
                  <h3>Can I complete my Teen Patti Master profile in parts?</h3>
                </div>
                <div className="acc-item">
                  <h3>What are the benefits of being a Teen Patti Master?</h3>
                </div>
              </div>
            </div>
            <div className="flex-[0_0_45%]">
              <img src="/faq-img.webp" alt="FAQ" className="faq-img"/>
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

export default About;
