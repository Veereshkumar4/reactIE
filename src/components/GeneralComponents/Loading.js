import React from "react";
import ContentLoader from "react-content-loader"

const LoadingCard = props => (
  <ContentLoader
    height={258}
    width={255}
    speed={1}
    primaryColor="#e8e8e8"
    secondaryColor="#ffffff"
    {...props}
  >
    <rect x="187.4" y="159.27" rx="3" ry="3" width="42.5" height="20.22" />
    <rect x="23.07" y="100.3" rx="3" ry="3" width="206.5" height="9.487799999999998" />
    <rect x="31" y="193.93" rx="3" ry="3" width="202.17" height="1.99" />
    <rect x="-1.5" y="3.27" rx="0" ry="0" width="253.94" height="84.91" />
    <rect x="59" y="203.49" rx="0" ry="0" width="145.86" height="42.12" />
    <rect x="24" y="125.27" rx="0" ry="0" width="144" height="11.28" />
    <rect x="209" y="142.27" rx="0" ry="0" width="0" height="0" />
    <rect x="186.5" y="199.27" rx="0" ry="0" width="0" height="0" />
    <rect x="198.5" y="206.27" rx="0" ry="0" width="0" height="0" />
    <rect x="210.5" y="199.27" rx="0" ry="0" width="0" height="0" />
    <rect x="62.5" y="160.27" rx="0" ry="0" width="20" height="22.08" />
    <rect x="93.5" y="159.27" rx="0" ry="0" width="18" height="23.98" />
    <rect x="121.5" y="159.27" rx="0" ry="0" width="22" height="23.94" />
    <rect x="134.5" y="172.27" rx="0" ry="0" width="0" height="0" />
    <rect x="30.5" y="159.27" rx="0" ry="0" width="22" height="21" />
    <rect x="1.01" y="-1.24" rx="0" ry="0" width="2.48" height="294" />
    <rect x="252.5" y="-14.63" rx="0" ry="0" width="34" height="278.85" />
    <rect x="9.5" y="254.27" rx="0" ry="0" width="301" height="5" />
    <rect x="1.5" y="254.27" rx="0" ry="0" width="237" height="5" />
    <rect x="-3.5" y="-12.27" rx="0" ry="0" width="259" height="15.47" />
  </ContentLoader>
)

export default LoadingCard;