import { Outlet } from "react-router-dom";
import Aside from "../components/dashboard/Aside";
import Content from "../components/dashboard/Content";
import FooterDash from "../components/dashboard/FooterDash";
import HeaderDash from "../components/dashboard/HeaderDash";



const SecondaryLayout = () => {
    return (
        <>
            <div class="hold-transition sidebar-mini">
                <div class="wrapper">
                    <HeaderDash />
                    <Aside />
                    <Content />
                    <section>
                        <Outlet />
                    </section>
                    <FooterDash />
                </div>
            </div>
        </>

    );
}

export default SecondaryLayout;