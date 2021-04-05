import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>
        Library
        {/* <img
          src="https://www.flaticon.com/svg/vstatic/svg/2739/2739377.svg?token=exp=1617624085~hmac=367008c0ca018e02479f6fdc72cbe1fe"
          alt="submarine"
          className="submarine"
        /> */}
      </h2>

      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
