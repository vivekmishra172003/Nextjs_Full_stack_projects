import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="border-b text-center">
                20% off for the next 3 days
            </div>
            {children}
        </>
    );
};

export default Layout;
