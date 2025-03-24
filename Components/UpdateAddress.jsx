import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils/index";

const UpdateAddress = ({
  setOpenUpdateAddress,
  UPDATE_TOKEN,
  currency,
  detail,
  ERC20,
  setLoader,
}) => {
  const [address, setAddress] = useState();
  const [tokenDetails, setTokenDetails] = useState();
  const [TransferToken, setTransferToken] = useState();

  useEffect(() => {
    if (TransferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(TransferToken);
        if (token == undefined) {
          console.log("Kindly paste the token address");
        } else {
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false);
      };
      loadToken();
    }
  }, [TransferToken]);

  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
            Update Token {currency}
            <strong onClick={() => setOpenUpdateAddress(false)}>X</strong>
          </h2>

          <div>
            <div className="row">
              <div className="col-lg-12">
                {tokenDetails?.name ? (
                  <input
                    type="text"
                    value={`Name ${tokenDetails?.name} Balance: ${tokenDetails?.balance} ${tokenDetails?.symbol}`}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Token Address"
                    onChange={(e) => (
                      setAddress(e.target.value),
                      setTransferToken(e.target.value)
                    )}
                  />
                )}
              </div>

              <p>
                <strong>Current Price</strong> {detail?.tokenPrice} {currency}{" "}
                &nbsp; &nbsp; <strong>Token Balance</strong> {detail?.tokenBal}{" "}
                {detail?.symbol} &nbsp; &nbsp;
                <strong
                  onClick={() =>
                    navigator.clipboard.writeText(detail?.tokenAddr)
                  }
                >
                  Token Address
                </strong>
                {detail?.tokenBal} {shortenAddress(detail?.tokenAddr)}
              </p>

              <div className="ico-contact__btn text-center mt-10">
                <button
                  onClick={() => UPDATE_TOKEN(address)}
                  className="thm-btn"
                >
                  Update Address
                </button>
              </div>
            </div>
          </div>

          <div className="ico-contact__shape-img">
            <div className="shape shape--1">
              <div className="">
                <img src="assets/img/shape/c_shape1.png" alt="" />
              </div>
            </div>
            <div className="shape shape--2">
              <div className="">
                <img src="assets/img/shape/c_shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ico-contact__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/c_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default UpdateAddress;
