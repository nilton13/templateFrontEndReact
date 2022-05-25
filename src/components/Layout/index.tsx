import { Navbar } from "../Navbar";

interface LayoutProps {
    titulo: string;
    children?:any;
}

export const Layout:React.FC<LayoutProps> = ({titulo,children}:LayoutProps) =>{
    return (
        <>
            <div className="d-flex flex-row">
                <Navbar/>
                <div className="container text-center mt-5">
                    <h5>{titulo}</h5>
                    <hr />
                    <div className="text-start">
                        {children}
                    </div>
                </div>
                
            </div>
        </>
    );
}