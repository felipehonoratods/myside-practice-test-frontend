'use client'

import React, { useState } from "react";
import { Products } from "./components/Products";
import { SearchAndSelect } from "./components/SearchAndSelect";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  return (
    <>
      <SearchAndSelect setSearch={setSearch} setSelectedCategory={setSelectedCategory} />
      <Products search={search} selectedCategory={selectedCategory} />
    </>
  );
}
