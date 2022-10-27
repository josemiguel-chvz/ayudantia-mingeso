import Menu from "./components/Menu";

const Layout = ({ children }) => {
    return (
        <>
            <Menu/>
            <main>{children}</main>
        </>
    );
};

export default Layout;