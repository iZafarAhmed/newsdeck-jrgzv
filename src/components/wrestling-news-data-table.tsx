import { wrestlingNewsSources, WrestlingNewsSource } from '@/data/wrestling-news-sources';
import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/ui/columns';

interface WrestlingNewsDataTableProps {
    data: WrestlingNewsSource[];
}

export const WrestlingNewsDataTable: React.FC<WrestlingNewsDataTableProps> = ({ data }) => {
    return <DataTable columns={columns} data={data} />;
};