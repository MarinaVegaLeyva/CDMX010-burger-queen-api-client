import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import OrderCardsContainer from "../../components/OrderCardsWaiters/MainContainer/OrderCardsContainer";
import "./WaitersMain.css";

const WaitersMain = () => {
  const [pending, setPending] = useState();
  const [delivering, setDelivering] = useState();
  let getData = async () => {
    let url = "http://localhost:3004/orders";
    let getFectchData = await fetch(url).then((resul) => resul.json());
    let filterPending = getFectchData.filter(
      (element) => element.status === "pending"
    );
    setPending(filterPending);

    let filterDelivering = getFectchData.filter(
      (element) => element.status === "delivering"
    );
    setDelivering(filterDelivering);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mainWaiters-container">
      <Header />
      <OrderCardsContainer pending={pending} delivering={delivering} />
    </div>
  );
};
export default WaitersMain;
