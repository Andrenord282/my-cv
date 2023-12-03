import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const LayoutDefault = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export { LayoutDefault };
