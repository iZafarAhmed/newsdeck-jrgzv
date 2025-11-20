import { WrestlingNewsDataTable } from '@/components/wrestling-news-data-table';
import { wrestlingNewsSources } from '@/data/wrestling-news-sources';

const WrestlingNewsPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Wrestling News Sources</h1>
            <p className="text-gray-500">A list of popular wrestling news sources.</p>
            <WrestlingNewsDataTable data={wrestlingNewsSources} />
        </div>
    );
};

export default WrestlingNewsPage;