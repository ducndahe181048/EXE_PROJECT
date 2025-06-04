import HeaderC from "../app/home/HeaderC"
import FooterC from '../app/home/FooterC';
import { Outlet } from "react-router";

const HomeLayout = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <HeaderC />

            <main className="flex justify-center items-center flex-1 mx-auto">
                <Outlet/>
            </main>

            <FooterC />
        </div>
    );
};

export default HomeLayout;
