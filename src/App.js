import "./assets/main.scss";
import "./assets/font-family.scss";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import SpinnerEffect from "./components/spinner/spinner";

import { SinglePortfolio } from "./pages";
import { useSelector } from "react-redux";
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Ticket = lazy(() => import("./pages/Ticket"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Links = lazy(() => import("./pages/links"));
const Vacancy = lazy(() => import("./pages/Vacancy"));
const Error = lazy(() => import("./pages/error"));
const About = lazy(() => import("./pages/About"));
const SingleVacancy = lazy(() => import ("./pages/singleVacancy"))
const Header = lazy(() => import("./containers/header"));
const Footer = lazy(() => import("./containers/footer"));
const Mobile = lazy(() => import("./components/home-mobile"));
const Notification = lazy(() =>
  import("./components/Notification/Notification")
);
const TopScrool = lazy(() => import("./components/topScrool"));
const ScrollTop = lazy(() => import("./components/scrollTop"));

function App() {
  const lang = useSelector((state) => state.data.lang);
  const notification = useSelector((state) => state.data.notification);
  useEffect(() => {
    setTimeout(() => {
      // console.clear()
      // const text = lang === 'ru' ? `Остановитесь!` : lang === 'uz' ? "To'xta!" : lang === "en" ? "STOP" : ""
      // const miniText = lang === 'ru' ? `Эта функция браузера предназначена для разработчиков!` : lang === 'en' ? 'This is a browser feature intended for developers' : lang === 'uz' ? `Bu dasturchilar uchun mo'ljallangan brauzer xususiyati` : ''
      // console.log(`%c${text}`, "color:red; font-size:50px; font-weight:bold;")
      // console.log(`%c${miniText}`, "color:black; font-size:25px; font-weight:bold;")
    }, 3000);
  }, [lang])

  return (
    <Suspense fallback={<SpinnerEffect />}>
      <Router>
        <ScrollTop>
          <div className="App">
            <Notification error={notification.error} show={notification.show} />
            <Header />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
              <Route path="/portfolio/:id" component={SinglePortfolio} />
              <Route path="/Vacancy/:id" component={SingleVacancy} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/ticket" component={Ticket} />
              <Route path="/blog" component={Blog} />
              <Route path="/links" component={Links} />
              <Route path="/Vacancy" component={Vacancy} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={Error} />
            </Switch>
            <Mobile />
            <TopScrool />
            <Footer />
          </div>
        </ScrollTop>
      </Router>
    </Suspense>
  );
}

export default App;
