// import React from "react";
// import PodcastData from "../../Json/podcast-for-leadership.json";
// import Insights from "../../Json/insights.json";
// import Keynotes from "../../Json/keynotes.json";
// import PressReleaseData from "../../Json/pressrelease.json";
// import { leadership } from "../../Json/leadership";

// const LadershipArticles = ({ option, searchText }) => {
//   const filteredData = leadership
//     .filter(
//       (item) =>
//         item.title.toLowerCase().includes(searchText.toLowerCase()) 
//         // option[option.findIndex((obj) => obj["value"] === "category")]?.isActive
//     )
//     .sort((a, b) => new Date(b.date) - new Date(a.date));
//   // const filteredInsights = Insights.filter((insight) =>
//   //   insight.title.toLowerCase().includes(searchText.toLowerCase())
//   // );
//   // const filteredKeynotes = Keynotes.filter((keynotes) =>
//   //   keynotes.title.toLowerCase().includes(searchText.toLowerCase())
//   // );
//   // const filteredPressReleases = PressReleaseData.filter((press) =>
//   //   press.title.toLowerCase().includes(searchText.toLowerCase())
//   // );
//   return (
//     <section>
//       <div className="mt-20 flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
//         {/* {option[option.findIndex((obj) => obj["value"] === "category")]
//           ?.isActive && */}
//         {filteredData.map((item, index) => {
//           return (
//             <div className="md:w-[47%] lg:w-[30%]" key={index}>
//               <div className="flex items-center justify-between gap-5">
//                 <div className="flex-1 max-w-[120px]">
//                   {item.image ? (
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       width={150}
//                       className=""
//                     />
//                   ) : (
//                     <img
//                       src="/images/podcasts/podcast.png"
//                       alt={item.title}
//                       width={150}
//                       className=""
//                     />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <div className="uppercase text-lg">{item.category}</div>
//                   <a
//                     target="_blank"
//                     rel="noreferrer"
//                     href={item.link}
//                     className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
//                   >
//                     {item.title}
//                   </a>

//                   {item.date && (
//                     <div className="date text-sm uppercase">{item.date}</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         {/* {option[option.findIndex((obj) => obj["value"] === "PRESS RELEASE")]
//           ?.isActive &&
//           filteredPressReleases.map((press, index) => {
//             return (
//               <div className="md:w-[47%] lg:w-[30%]" key={index}>
//                 <div className="uppercase text-lg">Press Release</div>
//                 <a
//                   href={press.link}
//                   className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
//                 >
//                   {press.title}
//                 </a>
//                 <div className="date text-sm uppercase">{press.date}</div>
//               </div>
//             );
//           })}
//         {option[option.findIndex((obj) => obj["value"] === "INSIGHTS")]
//           ?.isActive &&
//           filteredInsights.map((insight, index) => {
//             return (
//               <div className="md:w-[47%] lg:w-[30%]" key={index}>
//                 <div className="flex items-center justify-between gap-5">
//                   <div className="flex-1 max-w-[120px]">
//                     <img
//                       src={insight.image}
//                       alt={insight.title}
//                       width={150}
//                       className=""
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <div className="uppercase text-lg">Insights</div>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href={insight.link}
//                       className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
//                     >
//                       {insight.title}
//                     </a>
//                     {insight.date && (
//                       <div className="date text-sm uppercase">
//                         {insight.date}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         {option[option.findIndex((obj) => obj["value"] === "KEYNOTES")]
//           ?.isActive &&
//           filteredKeynotes.map((keynotes, index) => {
//             return (
//               <div className="md:w-[47%] lg:w-[30%]" key={index}>
//                 <div className="flex items-center justify-between gap-5">
//                   <div className="flex-1 max-w-[120px]">
//                     <img
//                       src={keynotes.image}
//                       alt={keynotes.title}
//                       width={150}
//                       className=""
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <div className="uppercase text-lg">Keynotes</div>
//                     <a
//                       target="_blank"
//                       rel="noreferrer"
//                       href={keynotes.link}
//                       className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
//                     >
//                       {keynotes.title}
//                     </a>
//                     {keynotes.date && (
//                       <div className="date text-sm uppercase">
//                         {keynotes.date}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })} */}
//       </div>
//     </section>
//   );
// };

// export default LadershipArticles;

import React from "react";
import { leadership } from "../../Json/leadership";

const LadershipArticles = ({ searchText }) => {
  const filteredData = leadership
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) 
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section>
      <div className="mt-20 flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {filteredData.map((item, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="flex items-center justify-between gap-5">
                <div className="flex-1 max-w-[120px]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      width={150}
                      className=""
                    />
                  ) : (
                    <img
                      src="/images/podcasts/podcast.png"
                      alt={item.title}
                      width={150}
                      className=""
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="uppercase text-lg">{item.category}</div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
                  >
                    {item.title}
                  </a>

                  {item.date && (
                    <div className="date text-sm uppercase">{item.date}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LadershipArticles;
