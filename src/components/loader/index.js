import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
        speed={2}
        width={336}
        height={365}
        viewBox="0 0 336 365"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="2" y="3" rx="4" ry="4" width="300" height="300" /> 
        <rect x="90" y="309" rx="4" ry="4" width="110" height="22" /> 
        <rect x="131" y="335" rx="4" ry="4" width="28" height="20" />
  </ContentLoader>
)

export default MyLoader