import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    return await axios.get("http://localhost:3001/albums").then((res) => {
      return res;
    });
  };

  useEffect(() => {
    getAlbums().then((res) => {
      setAlbums(res.data);
    });
  }, []);

  return (
    <>
      <div className="App">Hello World</div>
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
