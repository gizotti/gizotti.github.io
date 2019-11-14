import React from "react"

import BasePage from "../BasePage"
import VideoCard from "../../components/VideoCard"

import styles from "./MusicPage.module.css"

const MusicPage = () => {
  return (
    <BasePage>
      <div className={styles.grid}>
        <VideoCard
          title="Sup"
          videoUrl="https://www.youtube.com/embed/xwRFb7PTeGI"
          tags={["tokusatsu", "cover"]}
        />
        <VideoCard
          title="Sup 2"
          videoUrl="https://www.youtube.com/embed/vaztT3_euqY"
          tags={["tokusatsu", "cover"]}
        />
        <VideoCard
          title="Sup 3"
          videoUrl="https://www.youtube.com/embed/egKWHl1aChg"
          tags={["tokusatsu", "cover"]}
        />
        <VideoCard
          title="Sup 4"
          videoUrl="https://www.youtube.com/embed/xwRFb7PTeGI"
          tags={["tokusatsu", "cover"]}
        />
      </div>
    </BasePage>
  )
}

export default MusicPage
