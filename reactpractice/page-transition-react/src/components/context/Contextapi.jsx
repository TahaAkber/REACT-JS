import React, { createContext, useState } from "react";

export const Shopcontext = createContext(null);
function Contextapi(props) {
  const [cartitems, setcartitems] = useState({});
  return <Shopcontext.Provider>{props.children}</Shopcontext.Provider>;
}

export default Contextapi;
