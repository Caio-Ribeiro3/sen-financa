import Skeleton from "../../atoms/skeleton/Skeleton";
import "./DataTableColumns.css";

export const DataTableSkeleton = (props) => {
  const { cells = 4 } = props;
  return (
    <div className="p-2 flex-row gap-2">
      {new Array(cells).fill(1).map((_, index) => (
        <div key={index} className="flex-row flex data-table-columns-item">
          <Skeleton />
        </div>
      ))}
    </div>
  );
};

export default DataTableSkeleton;
