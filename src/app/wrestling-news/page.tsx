import { wrestlingNewsSources } from "@/data/wrestling-news-sources";
import { WrestlingNewsClient } from "./_components/wrestling-news-client";
import { columns } from "./_components/columns";

const WrestlingNewsPage = () => {
  return <WrestlingNewsClient columns={columns} data={wrestlingNewsSources} />;
};

export default WrestlingNewsPage;
