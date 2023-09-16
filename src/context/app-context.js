import { createContext } from "react";

const AppContext = createContext({
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  data : null,
  isLoading : false,
  // onPageData : null,
});

export default AppContext;
