import React from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './HomePage.scss';
import Card from '../../components/Card/Card';
import suit from '../../assets/images/suits.png';
import aboutUs1 from '../../assets/images/about-us-1.jpg';
import aboutUs2 from '../../assets/images/about-us-2.png';
import wedding from '../../assets/images/wedding.png';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth={1280} className="container">
        <div>
          <h1>
            Pánské obleky
            <br />
            na míru
          </h1>
        </div>
        <div className="wrapper mb-4 mt-1">
          <div className="wrapper--left">
            <p className="title-2 mt-1 mb-3">Kvalitní šití pánského oblečení na míru v krátkém čase</p>
            <div></div>
            <Card className="card card--explore-light">
              <img src={wedding} />
              <div className="item-1"></div>
              <div className="item-2">
                <div style={{ marginLeft: '1rem' }}>Obleky pro svatební události</div>
                <div>
                  <button>Prozkoumat</button>
                  <div className="line"></div>
                </div>
              </div>
            </Card>
          </div>
          <div className="wrapper--right">
            <Card className="card card--explore-dark">
              <div className="container--address">
                <address className="address">
                  <div>Liptaň 300</div>
                  <div>793 96 Liptaň</div>
                  <div>Česká republika</div>
                </address>
                <button>
                  Prozkoumej
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <img src={suit} alt="suit" />
            </Card>
            <div className="">
              <p className="title-1 mt-1 mb-1">Vyrábíme oblečení pro:</p>
              <div className="description">
                <h4 className="title-4">
                  Jasné, silné osobnosti, pro skutečné muže, pro nejlepší představitelé své generace. Tvoříme oblečení,
                  ve kterém se budete cítit dokonale.
                </h4>
                <button className="btn--down">
                  <i className="fa-solid fa-arrow-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container--work mb-4">
          <div className="item">
            <i className="fa-solid fa-scissors"></i>
            <h3>Zakázkové šití</h3>
            <p>Šijeme pánské obleky na míru zákazníkům</p>
          </div>
          <div className="item">
            <i className="fa-brands fa-black-tie"></i>
            <h3>Uniformy</h3>
            <p>Slavnostní uniforma pro myslivce, hasiče, hotely</p>
          </div>
          <div className="item">
            <i className="fa-solid fa-user-tie"></i>
            <h3>Obleky</h3>
            <p>Pánské obleky v konfekčních velikostech podle módních trendů.</p>
          </div>
        </div>
        <div>
          <div className="container--about-us">
            <img src={aboutUs2} className="item" alt="about" />
            <div className="item">
              <h3>Výrobní program</h3>
              <p>
                Výrobní program zahrnuje oblast od šití pánských obleků v konfekčních velikostech přes výrobu uniforem a
                stejnokrojů pro různé firmy, spolky, organizace (hotely, bezpečnostní agentury, SDH-dobrovolní hasiči,
                firemní oblečení pro management) až po zakázkové šití pánských obleků na míru.
              </p>
            </div>
          </div>
          <div className="container--about-us">
            <div className="item">
              <h3>Prémiové látky</h3>
              <p>
                Při šití obleků na míru vycházíme z posledních módních trendů a zpracováváme pouze kvalitní vlněné
                látky. Výsledkem je pánský oblek, který přispěje ke zvýšení image.
              </p>
            </div>
            <img src={aboutUs1} className="item" alt="about" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
