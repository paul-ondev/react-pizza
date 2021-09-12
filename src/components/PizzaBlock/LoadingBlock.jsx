import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={294}
    height={468}
    viewBox="0 0 294 468"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="120" r="120" /> 
    <rect x="0" y="310" rx="10" ry="10" width="240" height="80" /> 
    <rect x="0" y="270" rx="10" ry="10" width="240" height="25" /> 
    <rect x="0" y="415" rx="10" ry="10" width="73" height="28" /> 
    <rect x="120" y="403" rx="25" ry="25" width="120" height="46" />
  </ContentLoader>
)

export default PizzaLoadingBlock