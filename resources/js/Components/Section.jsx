import { Head } from "@inertiajs/react";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import { dataBar, dataLine } from "../assets/chartData";
import Card from "./Card";
ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const Section = () => {
    return (
        <div className="grow p-8">
            <Head title="Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card icon={<FaShoppingCart />} title="Orders" value="140" />
                <Card icon={<FaBox />} title="Products" value="120" />
                <Card icon={<FaUsers />} title="Users" value="30" />
                <Card icon={<FaCog />} title="Settings" value="11" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
                    <Line data={dataLine} />
                </div>
                <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">
                        Products Data
                    </h3>
                    <Bar data={dataBar} />
                </div>
            </div>
        </div>
    );
};

export default Section;
