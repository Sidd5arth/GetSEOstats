import { useCallback, useEffect, useState } from "react";
import AppContext from "./app-context.js";
import axios from "axios";

const AppContextProvider = ({ children, url }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [onPageData, setOnPageData] = useState();

  const fetchData = async (recievedUrl) => {
    try {
      if(!isLoading){
        setIsLoading(true);
      }
      const url = recievedUrl.toString();
      let post_array = [];
      post_array.push({
        url: url,
        max_crawl_pages: 1,
        store_raw_html: true,
        load_resources: true,
        support_cookies: true,
        enable_javascript: true,
        enable_browser_rendering: true,
        custom_js: "meta = {}; meta.url = document.URL; meta;"
      });
      const response = await axios({
        method: "post",
        url: "https://api.dataforseo.com/v3/on_page/instant_pages",
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
        data: post_array,
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(response);
      const result = response.data.tasks[0].result[0].items[0]
      console.log(result);
      setIsLoading(false);
      return result;

      // previously I was calling task post api then using that Id I was getting the data with filtering //
      // since you had not specified what amount of data is required //

      // let resArray = [];
      // const post_array = [];
      // post_array.push({
      //   target: url,
      //   max_crawl_pages: 10,
      //   store_raw_html: true,
      //   load_resources: true,
      //   support_cookies: true,
      // });
      // const response = await axios({
      //   method: "post",
      //   url: "https://api.dataforseo.com/v3/on_page/task_post",
      //   auth: {
      //     username: process.env.REACT_APP_USERNAME,
      //     password: process.env.REACT_APP_PASSWORD,
      //   },
      //   data: post_array,
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
  
      // const result = response.data.tasks[0].id;
      // console.log(result);
      // resArray.push(result);
      // const idVal = result.toString();
  
      // const post_array2 = [];
      // post_array2.push({
      //   id: idVal,
      //   filters: ["resource_type", "=", "html"],
      //   limit: 3,
      // });
  
      // const response2 = await axios({
      //   method: "post",
      //   url: 'https://api.dataforseo.com/v3/on_page/pages',
      //   auth: {
      //     username: process.env.REACT_APP_USERNAME,
      //     password: process.env.REACT_APP_PASSWORD,
      //   },
      //   data: post_array2,
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
  
      // const result2 = response2.data.tasks;
      // console.log(result);
      // console.log(result2);
      // resArray.push(result2)
  
      // return resArray;
    } catch (err) {
      console.log("Error:", err);
      throw err;
    }
  };

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const changeDimensionsHandler = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", changeDimensionsHandler);
    return () => {
      window.removeEventListener("resize", changeDimensionsHandler);
    };
  }, [changeDimensionsHandler]);

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      if (url) {
        try {
          const res = await fetchData(url);
          setData(res);
          // setData(res[0]);
          // setOnPageData(res[1]);
        } catch (err) {}
      }
    };

    fetchDataAndUpdate();
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        dimensions,
        data,
        isLoading,
        // onPageData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
