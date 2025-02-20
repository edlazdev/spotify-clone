import { type Song, type CurrentMusic, type MusicPlayer } from "@/interfaces"
import { Play, Pause } from "@/icons/PlayerIcons";
import { usePlayerStore} from "@/store/playerStore.ts";
import { getPlayListInfoById } from "@/services/services";


const isNewSongOfAnotherPlaylist = (currentMusic: CurrentMusic, song: Song) => {
  return currentMusic.playlist?.id != song.albumId.toString()
}


const setNewCurrentMusic = (
  song: Song,
  setIsPlaying: (isPlaying: boolean) => void,
  setCurrentMusic: (currentMusic: CurrentMusic) => void): void => {
  getPlayListInfoById(song?.albumId).then(data => {
    const {songs, playlist} = data
    setCurrentMusic({songs: songs, playlist: playlist, song: song})
  }).then(() => {
    setIsPlaying(true)
  });
}

export const MusicsTablePlay = ({song}: MusicPlayer) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isCurrentSongRunning = (song: Song) => {
    return (currentMusic.song?.id == song.id)
      && (currentMusic.playlist?.albumId == song.albumId)
      && isPlaying
  }


  const handleClick = (song: Song) => {
    if (isCurrentSongRunning(song)) {
      setIsPlaying(false)
      return
    }

    if (isNewSongOfAnotherPlaylist(currentMusic, song)) {
      setNewCurrentMusic(song, setIsPlaying, setCurrentMusic)
      return
    }

    // the playlist is the same, but the song is different
    if (currentMusic.song?.id !== song.id) {
      setCurrentMusic({songs: currentMusic.songs, playlist: currentMusic.playlist, song: song})
    }
    setIsPlaying(true)
  }


  const className = "hover:scale-125"
  return (
    <button className="text-white" onClick={() => handleClick(song)}>
      {isCurrentSongRunning(song) ? <Pause className={className}/> : <Play className={className}/>}
    </button>
  )
}
