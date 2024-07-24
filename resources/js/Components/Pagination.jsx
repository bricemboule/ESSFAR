import { Link } from "@inertiajs/react";

function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.url || ""}
                    className={
                        "inline-block px-3 py-2 rounded-lg text-white text-xs " +
                        (link.active ? "bg-sky-400 " : "") +
                        (!link.url
                            ? " !text-gray-500 cursor-not-allowed "
                            : "hover:gb-gray-950 ")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}

export default Pagination;
