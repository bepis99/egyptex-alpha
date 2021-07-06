import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import { BrowserRouter as Router,  Route, Switch, Link} from "react-router-dom";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import LandingPage from "pages/HotelTravelLandingPage";
import LoginPage from "pages/Login";
import SignupPage from "pages/Signup";
import AboutUsPage from "pages/AboutUs";
import TermsOfServicePage from "pages/TermsOfService";
import PrivacyPolicyPage from "pages/PrivacyPolicy";
import ExplorePage from "components/features/VerticalWithAlternateImageAndText"
import Cultural from "components/blogs/Cultural";
import Leisure from "components/blogs/Leisure";
import Religious from "components/blogs/Religious";
import Medical from "components/blogs/Medical";
import Booking from "pages/Booking";

function App() {

  

  return (
    <AnimationRevealPage >

      <Router>
        <Switch>
      <Route  exact path="/home" component={LandingPage} />
      <Route  exact path="/explore" component={ExplorePage} />
      <Route  exact path="/cultural-tourism" component={Cultural} />
      <Route  exact path="/leisure-tourism" component={Leisure} />
      <Route  exact path="/religious-tourism" component={Religious} />
      <Route  exact path="/medical-tourism" component={Medical} />
      <Route  exact path="/booking" component={Booking} />
      <Route  exact path="/login" component={LoginPage} />
      <Route  exact path="/about-us" component={AboutUsPage} />
      <Route  exact path="/sign-up" component={SignupPage} />
      <Route  exact path="/tos" component={TermsOfServicePage} />
      <Route  exact path="/privacy-policy" component={PrivacyPolicyPage} />
      </Switch>
      </Router>
    </AnimationRevealPage>
  )
}

export default App