import React from "react";
import PodcastData from "../../Json/podcast-for-leadership.json";
import Insights from "../../Json/insights.json";
import Keynotes from "../../Json/keynotes.json";
import PressReleaseData from '../../Json/pressrelease.json'

const LadershipArticles = ({option,searchText}) => {
  const filteredPodcasts = PodcastData.filter(podcast =>
    podcast.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredInsights = Insights.filter(insight =>
    insight.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredKeynotes = Keynotes.filter(keynotes =>
    keynotes.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredPressReleases = PressReleaseData.filter(press =>
    press.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <section>
      <div className="mt-20 flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {option[option.findIndex(obj => obj['value'] === 'PODCAST')]?.isActive && filteredPodcasts.map((podcast, index) => {
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
        { option[option.findIndex(obj => obj['value'] === 'PRESS RELEASE')]?.isActive && filteredPressReleases.map((press, index) => {
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
        {option[option.findIndex(obj => obj['value'] === 'INSIGHTS')]?.isActive && filteredInsights.map((insight, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Insights</div>
              <a
                target="_blank"
                href={insight.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {insight.title}
              </a>
              {insight.date && <div className="date text-sm uppercase">{insight.date}</div>}
            </div>
          );
        })}
        {option[option.findIndex(obj => obj['value'] === 'KEYNOTES')]?.isActive && filteredKeynotes.map((keynotes, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Keynotess</div>
              <a
                target="_blank"
                href={keynotes.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {keynotes.title}
              </a>
              {keynotes.date && <div className="date text-sm uppercase">{keynotes.date}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LadershipArticles;
