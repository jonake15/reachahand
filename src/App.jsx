import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../src/components/ErrorBoundary";
import {
  PeerSignin,
  Home,
  Partners,
  Programs,
  Events,
  Impact,
  PeerPage,
  GetInvolved,
  Opportunities,
  Resources,
  PartnerDetails,
  EventDetails,
  BlogDetails,
  PartnerForm,
  OpportunityDetails,
  ResourceDetails,
  PeerFeed,
  Global,
  GetRAHU,
  ABoutRAHU,
} from "./pages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/Impact" element={<Impact />} />
          <Route path="/GetRAHU" element={<GetRAHU />} />
          <Route path="/ABoutRAHU" element={<ABoutRAHU />} />
          <Route path="/Global" element={<Global />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/PeerSignin" element={<PeerSignin />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/PeerPage" element={<PeerPage />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
          <Route path="/Opportunities" element={<Opportunities />} />
          <Route path="/PartnerForm" element={<PartnerForm />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/PeerFeed" element={<PeerFeed />} />
          <Route path="/PartnerDetails/:id" element={<PartnerDetails />} />
          <Route path="/EventDetails/:id" element={<EventDetails />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route path="/ResourceDetails/:id" element={<ResourceDetails />} />
          <Route
            path="/OpportunityDetails/:id"
            element={<OpportunityDetails />}
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
