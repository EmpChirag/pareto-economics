import React from 'react'
import ArticleData from '../../Json/articles.json'
import PodcastData from '../../Json/podcast.json'
import PressReleaseData from '../../Json/pressrelease.json'
import RadioData from "../../Json/tvradio.json";

const Articles = () => {
  return (
    <section>
      <div className="flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {ArticleData.map((article, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">Article</div>
              <a
                href={article.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {article.title}
              </a>
            </div>
          );
        })}
        {PodcastData.map((podcast, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">Podcast</div>
              <a
                href={podcast.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {podcast.title}
              </a>
            </div>
          );
        })}
        {PressReleaseData.map((press, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">Press Release</div>
              <a
                href={press.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {press.title}
              </a>
            </div>
          );
        })}
        {RadioData.map((radio, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">TV/Radio</div>
              <a
                href={radio.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {radio.title}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Articles