import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="text" onChange={handleKeywordSubmit} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
