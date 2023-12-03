import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { Init } from "@/pages/Init";

import classes from "./App.module.scss";

const App = () => {
    return (
        <div className={classes.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutDefault />}>
                        <Route index element={<Init />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export { App };
