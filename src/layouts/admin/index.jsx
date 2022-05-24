import Header from "./header";
import Footer from "./footer";
const AdminLayout = ({ children }) => {    
    return (
    <>
        <Header />
        <div>
            <h1>
                Admin Layout!
            </h1>
            {children}
        </div>
        <Footer />
    </>
    )
}

export default AdminLayout