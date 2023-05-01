import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutParams {
    children: ReactNode
}

const Layout = ({children}: ILayoutParams) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;