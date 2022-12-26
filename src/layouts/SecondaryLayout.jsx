import { Outlet } from "react-router-dom";
import HeaderDash from "../components/section/HeaderDash";
import SideBar from "../components/section/SideBar";


const SecondaryLayout = () => {
    return (
        <>
            <HeaderDash />
            <SideBar />
            <section>
                <Outlet />
            </section>
        </>

    );
}

export default SecondaryLayout;