import ApplicationLogo from "./ApplicationLogo";
import Menu from "./Menu";

const Sidebar = ({ user }) => {
    console.log(user);
    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <ApplicationLogo />
            <Menu user={user} />
        </div>
    );
};

export default Sidebar;
