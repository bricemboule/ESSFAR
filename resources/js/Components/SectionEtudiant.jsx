import { Head } from "@inertiajs/react";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
} from "chart.js";
import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import Card from "./Card";
ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const SectionEtudiant = () => {
    return (
        <div className="grow p-8">
            <Head title="Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card icon={<FaShoppingCart />} title="Orders" value="140" />
                <Card icon={<FaBox />} title="Products" value="120" />
                <Card icon={<FaUsers />} title="Users" value="30" />
                <Card icon={<FaCog />} title="Settings" value="11" />
            </div>
        </div>
    );
};

export default SectionEtudiant;
