import { createContext, useState, ReactNode } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[],
  currentEpisodeIndex: number;
  isPlaying: Boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
}

export function PlayerContextProvider({ children }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [ isPlaying, setIsPlayng ] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlayng(true);
  }

  function playList(list: Episode[], index: number) {
    
  }

  function togglePlay() {
    setIsPlayng(!isPlaying)
  }

  function setPlayingState(state: boolean){
    setIsPlayng(state); 
  }

  return (
    <PlayerContext.Provider 
    value={
      { episodeList, 
        currentEpisodeIndex, 
        play, isPlaying, 
        togglePlay, 
        setPlayingState 
        }
      }>

    { children }

    </PlayerContext.Provider>
  )
}