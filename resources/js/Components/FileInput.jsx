export default function FileInput({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="file"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
}
