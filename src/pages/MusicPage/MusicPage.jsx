import React from "react"

import BasePage from "../BasePage"
import VideoCard from "../../components/VideoCard"
import SEO from "../../components/SEO"

import styles from "./MusicPage.module.css"

const MusicPage = () => {
  return (
    <BasePage>
      <SEO title="Music" />
      <div className={styles.grid}>
        <VideoCard
          title="Hironobu Kageyama - Hikari Sentai Maskman | Cover by Gizotti"
          videoUrl="https://www.youtube.com/embed/c-zFUCfQSF0"
          tags={["tokusatsu", "maskman", "特撮", "光戦隊マスクマン"]}
        />
        <VideoCard
          title="Mazinkaiser - Senshi yo nemure (Jam Project) | Cover by Gizotti"
          videoUrl="https://www.youtube.com/embed/egKWHl1aChg"
          tags={["マジンカイザー", "Mazinkaiser", "anime", "JAMProject"]}
        />
        <VideoCard
          title="Masaaki Endoh - Bakuryuu Sentai Abaranger (Cover)"
          videoUrl="https://www.youtube.com/embed/vaztT3_euqY"
        />
        <VideoCard
          title="Judas Priest - Firepower (Cover)"
          videoUrl="https://www.youtube.com/embed/xwRFb7PTeGI"
        />
      </div>
    </BasePage>
  )
}

export default MusicPage
