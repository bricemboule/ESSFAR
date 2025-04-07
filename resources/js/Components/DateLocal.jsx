export default function DateLocal({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="datetime-local"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
}
