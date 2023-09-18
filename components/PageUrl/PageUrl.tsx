import { useRouter } from "next/router";
import React from "react";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PageUrl = () => {
  const onPageData = useSelector((state: RootState) => state.seo.onPageData);
  const link = useSelector((state: RootState) => state.seo.link);
  const router = useRouter();
  const onPageResult = [
    {
      title: "External Links",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta
        ?.external_links_count,
    },
    {
      title: "Number of Images",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.images_count,
    },
    {
      title: "Images Size",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.images_size,
    },
    {
      title: "Scripts",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta
        ?.scripts_count,
    },
    {
      title: "Scripts Size",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.scripts_size,
    },
    {
      title: "Plain Text Size",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content
        ?.plain_text_size,
    },
    {
      title: "Plain Text Rate",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.plain_text_rate?.toFixed(
        2
      ),
    },
    {
      title: "Plain Text Word Count",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content
        ?.plain_text_word_count,
    },
    {
      title: "Automated Readability Index",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.automated_readability_index?.toFixed(
        2
      ),
    },
    {
      title: "Coleman Liau Readability Index",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.coleman_liau_readability_index?.toFixed(
        2
      ),
    },
    {
      title: "Dale Chall Readability Index",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.dale_chall_readability_index?.toFixed(
        2
      ),
    },
    {
      title: "Flesch Kincaid Readability Index",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.flesch_kincaid_readability_index?.toFixed(
        2
      ),
    },
    {
      title: "Smog Readability Index",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.smog_readability_index?.toFixed(
        2
      ),
    },
    {
      title: "Description to Content Consistency",
      data: onPageData?.tasks?.[0]?.result?.[0]?.items?.[0]?.meta?.content?.description_to_content_consistency?.toFixed(
        2
      ),
    },
  ];
  const percentage = 70;
  return (
    <>
      <div className="bg-white w-full min-h-screen text-black flex flex-col gap-12 items-center py-20">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-gray-500 font-medium text-lg">
            EVERYTHING YOU NEED TO KNOW
          </h1>
          <h1 className="text-5xl font-semibold text-black">
            Results for {link}
          </h1>
        </div>

        <div className="flex w-full justify-center ml-[-180px]">
          <div className="grid max-w-[950px] min-w-[950px] grid-cols-5 gap-7">
            <CircularProgressBar
              title="On-Page-Score"
              score={onPageData?.tasks?.[0]?.result[0]?.items[0]?.onpage_score!}
            />
            <CircularProgressBar className="ml-10" title="SEO" score={80.7} />
            <CircularProgressBar
              className="ml-2"
              title="Performance"
              score={77}
            />
            <CircularProgressBar
              className="ml-3"
              title="Accessibility"
              score={60}
            />
            <CircularProgressBar title="Best Practices" score={96} />
          </div>
        </div>

        <div
          className="min-w-[950px] max-w-[950px] w-full grid grid-cols-4 gap-7 mt-36
        
        
        
        
        
        
        
        "
        >
          {onPageResult?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border p-4 text-center text-black"
            >
              <span className="text-2xl">{item.data}</span>
              <p>{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PageUrl;