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
              <div className="flex items-center justify-between gap-5">
                <div className="flex-1 max-w-[120px]">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      width={150}
                      className=""
                    />
                  ) : (
                    <img
                      src='/images/articles/article.png'
                      alt={article.title}
                      width={150}
                      className=""
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="uppercase text-lg">Article</div>
                  <a
                    href={article.link}
                    rel="noreferrer"
                    className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
                  >
                    {article.title}
                  </a>
                  {article.date && (
                    <div className="date text-sm uppercase">{article.date}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {option[option.findIndex(obj => obj['value'] === 'PODCAST')]?.isActive && filteredPodcasts.map((podcast, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="flex items-center justify-between gap-5">
                <div className="flex-1 max-w-[120px]">
                  {podcast.image ? (
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      width={150}
                      className=""
                    />
                  ) : (
                    <img
                      src="/images/podcasts/podcast.png"
                      alt={podcast.title}
                      width={150}
                      className=""
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="uppercase text-lg">Podcast</div>
                  <a
                    href={podcast.link}
                    rel="noreferrer"
                    className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
                  >
                    {podcast.title}
                  </a>
                  {podcast.date && (
                    <div className="date text-sm uppercase">{podcast.date}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* { option[option.findIndex(obj => obj['value'] === 'PRESS RELEASE')]?.isActive && filteredPressReleases.map((press, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Press Release</div>
              <a
                href={press.link}
                className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
              >
                {press.title}
              </a>
            </div>
          );
        })} */}
        {option[option.findIndex(obj => obj['value'] === 'TV/RADIO')]?.isActive && filteredRadioData.map((radio, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="flex items-center justify-between gap-5">
                <div className="flex-1 max-w-[120px]">
                  {radio.image ? (
                  <img
                    src={radio.image}
                    alt={radio.title}
                    width={150}
                    className=""
                  />
                  ) : (
                  <img
                    src="/images/radio/tv-radio.png"
                    alt={radio.title}
                    width={150}
                    className=""
                  />
                  )}
                </div>
                <div className="flex-1">
                  <div className="uppercase text-lg">TV/Radio</div>
                  <a
                    href={radio.link}
                    rel="noreferrer"
                    className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
                  >
                    {radio.title}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Articles