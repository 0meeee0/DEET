import { useState } from "react";

export default function SearchUsers() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); 
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={search}
        className="searchU cntr"
        type="text"
        placeholder="Search for People"
      />
    </div>
  );
}
