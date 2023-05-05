import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { Container } from "react-bootstrap";
import SwitchToggle from "../Switch/SwitchToggle";
import PricingCard from "../PricingCard/PricingCard";
import { addToCart } from "../../actions/cartActions";
import { useDispatch } from "react-redux";

export default function Pricing() {
  const [starter, setStarter] = useState({ id: 1, name: "Starter" });
  const [professional, setProfessional] = useState({
    id: 2,
    name: "Professional",
  });
  const [enterprise, setEnterprise] = useState({ id: 3, name: "Enterprise" });
  const dispatch = useDispatch();

  const handleStarter = () => {
    dispatch(addToCart(starter));
  };

  const handleProfessional = () => {
    dispatch(addToCart(professional));
  };
  const handleEnterprise = () => {
    dispatch(addToCart(enterprise));
  };

  return (
    <Wrapper id="pricing">
      <Container fluid className="pricing-container ">
        <div className="row my-3">
          <div className="col-md-6 m-auto text-center">
            <h3 className="pricing-head">Pricing</h3>
            <h3 className="sub-heading">Choose your plan</h3>
            <p className="pricing-para">
              Select our monthly or annual plan according to your needs.
              Whichever suits you
            </p>
            <SwitchToggle />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <PricingCard
              heading={"Starter"}
              price={"9.99"}
              onClick={handleStarter}
            />
          </div>
          <div className="col-md-4 col-12">
            <PricingCard
              heading={"Professional"}
              price={"19.99"}
              onClick={handleProfessional}
            />
          </div>
          <div className="col-md-4 col-12">
            <PricingCard
              heading={"Enterprise"}
              price={"39.99"}
              onClick={handleEnterprise}
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
