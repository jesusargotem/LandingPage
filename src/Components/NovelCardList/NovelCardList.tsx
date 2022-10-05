import React from "react";
import NovelCard from "../NovelCard/NovelCard";
export interface NovelCardListInterface {}

const NovelCardList: React.FC<NovelCardListInterface> = (data) => {

  const novel = data
  console.log(novel);
  return <NovelCard />;
};

export default NovelCardList;
