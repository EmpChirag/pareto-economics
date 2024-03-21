import React from 'react'
import ArticleData from '../../Json/articles.json'
import PodcastData from '../../Json/podcast-for-news.json'
import RadioData from "../../Json/tvradio.json";

const Articles = ({option,searchText}) => {
  const filteredArticles = ArticleData.filter(article =>
    article.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredPodcasts = PodcastData.filter(podcast =>
    podcast.title.toLowerCase().includes(searchText.toLowerCase())
  );
  
  const filteredRadioData = RadioData.filter(radio =>
    radio.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <section>
      <div className="flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {option[option.findIndex(obj => obj['value'] === 'ARTICLES')]?.isActive && filteredArticles.map((article, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">Article</div>
              <a
                href={article.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {article.title}
              </a>
              {article.date && (
                <div className="date text-sm uppercase">{article.date}</div>
              )}
            </div>
          );
        })}
        {option[option.findIndex(obj => obj['value'] === 'PODCAST')]?.isActive && filteredPodcasts.map((podcast, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg md:text-2xl">Podcast</div>
              <a
                href={podcast.link}
                className="text-2xl md:text-3xl my-2 md:my-5 inline-block font-title"
              >
                {podcast.title}
              </a>
              {podcast.date && (
                <div className="date text-sm uppercase">{podcast.date}</div>
              )}
            </div>
          );
        })}
        {/* { option[option.findIndex(obj => obj['value'] === 'PRESS RELEASE')]?.isActive && filteredPressReleases.map((press, index) => {
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
        })} */}
        {option[option.findIndex(obj => obj['value'] === 'TV/RADIO')]?.isActive && filteredRadioData.map((radio, index) => {
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