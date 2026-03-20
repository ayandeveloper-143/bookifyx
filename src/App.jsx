import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsConditions from './components/TermsConditions.jsx';
import ServiceUnavailable from './components/ServiceUnavailable.jsx';
import HelpCenter from './components/HelpCenter.jsx';
import FAQ from './components/FAQ.jsx';
import ContactUs from './components/ContactUs.jsx';
import SendFeedback from './components/SendFeedback.jsx';
import AboutUs from './components/AboutUs.jsx';
import Careers from './components/Careers.jsx';
import Blogs from './components/Blogs.jsx';
import BlogDetail from './components/BlogDetail.jsx';
import CookiesPolicy from './components/CookiesPolicy.jsx';
import RefundPolicy from './components/RefundPolicy.jsx';
import useParallax from './components/useParallax.js';
import useRevealOnScroll from './components/useRevealOnScroll.js';

// Auth Components
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import EmailVerificationNotice from './components/EmailVerificationNotice.jsx';
import Auth from './components/Auth.jsx';

const AppContent = () => {
  useParallax();
  useRevealOnScroll();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/503" element={<ServiceUnavailable />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/feedback" element={<SendFeedback />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:author/:slug" element={<BlogDetail />} />
      <Route path="/cookies" element={<CookiesPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="*" element={<NotFound />} />
      {/* Auth routes */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-email" element={<EmailVerificationNotice />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
