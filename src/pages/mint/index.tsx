// @ts-ignore
import React from "react";
import Background from "../../assets/image/battle/battle_.jpg";
import WaterWave from "react-water-wave"

const Mint = () => {
  console.log(WaterWave)
  return (
    <img src={Background} className="mint" />
  )
  // let renderFirstold = () => {
  //   return (
  //     <WaterWave
  //       style={{
  //         width: "100%",
  //         height: "100vh",
  //         backgroundSize: "cover",
  //         background: `url(${Background}) no-repeat center center fixed`
  //       }}
  //       dropRadius={50}
  //       perturbance={0.05}
  //       interactive={true}
  //     ></WaterWave>
  //   );
  // };

  // return <div>{renderFirstold()}</div>;
}

export default Mint;
