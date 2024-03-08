import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // console.log(word);
    await fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = [{ ...data, title: word }, ...images];
        setImages(newData);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div className="App">
      <Header tittle="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <div className="flex flex-wrap pb-4 mx-4 my-4">
        {images.length ? (
          images.map((image, i) => (
            <ImageCard image={image} deleteImage={handleDeleteImage} key={i} />
          ))
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );
}

export default App;
