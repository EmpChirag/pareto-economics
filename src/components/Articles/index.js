import React from "react";
import ArticleData from "../../Json/articles.json";
import PodcastData from "../../Json/podcast-for-news.json";
import PressReleaseData from "../../Json/pressrelease.json";
import RadioData from "../../Json/tvradio.json";

const Articles = () => {
  return (
    <section>
      <div className="flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {ArticleData.map((article, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Article</div>
              <a
                target="_blank"
                href={article.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {article.title}
              </a>
              {article.date && <div className="date text-sm uppercase">{article.date}</div>}
            </div>
          );
        })}
        {PodcastData.map((podcast, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Podcast</div>
              <a
                target="_blank"
                href={podcast.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {podcast.title}
              </a>
              {podcast.date && <div className="date text-sm uppercase">{podcast.date}</div>}
            </div>
          );
        })}
        {PressReleaseData.map((press, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Press Release</div>
              <a
                target="_blank"
                href={press.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {press.title}
              </a>
              {press.date && <div className="date text-sm uppercase">{press.date}</div>}
            </div>
          );
        })}
        {RadioData.map((radio, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">TV/Radio</div>
              <a
                target="_blank"
                href={radio.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {radio.title}
              </a>
              {radio.date && <div className="date text-sm uppercase">{radio.date}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
