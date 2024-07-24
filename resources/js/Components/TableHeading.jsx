import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) {
    return (
        <th onClick={(e) => sortChanged(name)} className="px-3 py-3 ">
            <div className="flex gap-1  items-center justify-between cursor-pointer">
                {children}

                {sortable && (
                    <div>
                        <FaChevronUp
                            className={
                                "w-2 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-sky-400"
                                    : "")
                            }
                        />
                        <FaChevronDown
                            className={
                                "w-2 -mt-1" +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-sky-400"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
}

export default TableHeading;
