'use client'

import { useState } from "react";
import { Products } from "./components/Products";
import { SearchAndSelect } from "./components/SearchAndSelect";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <>
      <SearchAndSelect setSearch={setSearch} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <Products search={search} selectedCategories={selectedCategories} />
    </>
  );
}
