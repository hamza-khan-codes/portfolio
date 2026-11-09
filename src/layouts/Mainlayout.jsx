import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mainlayout() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="mx-auto min-h-[75vh] max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Mainlayout;
