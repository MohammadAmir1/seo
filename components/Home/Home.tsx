import { IOnpageData } from "@/Types/HomeType";
import axios from "axios";
import { useRouter } from "next/router";

import React, { CSSProperties, useState } from "react";
import { ClipLoader } from "react-spinners";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setLink, setOnPageData } from "@/feature/SeoSlice";
import { IRoot } from "@/Types/Datatypes";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const onPageData = useSelector((state: RootState) => state.seo.onPageData);
  const dispatch = useDispatch();
  const router = useRouter();
  async function fetchOnPageData(url: string): Promise<any> {
    const username = "utkarshtiwari200389@gmail.com"; // Replace with your DataForSEO username
    const password = "d4495e100fe2367b"; // Replace with your DataForSEO password

    const base64Value = `${Buffer.from(`${username}:${password}`).toString(
      "base64"
    )}`;

    console.log(base64Value, "base64");

    const authHeader = "Basic " + btoa(username + ":" + password);

    const apiUrl = "https://api.dataforseo.com/v3/on_page/task_post";

    try {
      const response = await axios.post(
        apiUrl,
        {
          data: [
            {
              target: url,
              max_crawl_pages: 10,
              load_resources: true,
              enable_javascript: true,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
        }
      );
      console.log(response.data, "response data");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch On-Page data: " + error);
    }
  }

  async function fetchPageData(url: string): Promise<any> {
    const username = "utkarshtiwari200389@gmail.com"; // Replace with your DataForSEO username
    const password = "d4495e100fe2367b"; // Replace with your DataForSEO password

    console.log(url, "fetch url ksjdkjsdkjsdk");

    const base64Value = `${Buffer.from(`${username}:${password}`).toString(
      "base64"
    )}`;

    console.log(base64Value, "base64");

    const authHeader = "Basic " + btoa(username + ":" + password);

    const apiUrl = "https://api.dataforseo.com/v3/on_page/pages";

    try {
      const response = await axios.post(
        apiUrl,
        {
          data: [
            {
              id: "09190041-6689-0216-0000-23e5da75414b",
              order_by: ["meta.content.plain_text_word_count,desc"],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch On-Page data: " + error);
    }
  }

  const [onPageId, setOnPageId] = useState("");
  const [inputUrl, setInputUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      const url = "https://devutkarsh.codes/"; // Replace with the URL you want to analyze
      const data: IRoot = await fetchOnPageData(inputUrl);
      dispatch(setLink(inputUrl));
      console.log(data.tasks[0].id, "id");
      setLoading(true);
      setOnPageId(data?.tasks?.[0]?.id);
      console.log(data, "datapost");
      const data1 = await fetchPageData(data?.tasks?.[0]?.id);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
      setTimeout(() => {
        clearTimeout(timeout);
        console.log("Timeout cleared!");
      }, 2000);
      dispatch(setOnPageData(data1));

      router.push(`/url`);
      setInputUrl("");
    } catch (error) {
      console.error("Error fetching On-Page data:", error);
    }
  }

  console.log(onPageData, "onPageData", inputUrl);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      {onPageData!?.tasks?.length !== 0 && (
        <>
          <div className="bg-white w-full px-auto py-10 flex justify-center min-h-screen pt-52">
            <div className="border border-gray-400 rounded-xl px-6 py-5 w-[600px] flex flex-col items-center justify-center h-52 gap-10">
              <input
                type="text"
                className="py-2 px-3 text-gray-700 rounded-xl border border-gray-400 w-[80%] outline-none"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
              <button
                onClick={(e) => {
                  fetchData();
                }}
                className="bg-[#F55F7B] px-4 py-2 rounded-md hover:text-[#F55F7B] duration-300 border hover:bg-white hover:border-[#F55F7B]"
              >
                Get a free SEO Audit Report
              </button>
            </div>
            {/* <h1>On-Page Data:</h1> */}
          </div>
        </>
      )}

      {onPageData!?.tasks.length > 0 && (
        <>
          <div className="bg-white w-full ">
            <pre className="text-black">
              {JSON.stringify(onPageData, null, 2)}
            </pre>
          </div>
        </>
      )}
    </>
  );
};

export default Home;