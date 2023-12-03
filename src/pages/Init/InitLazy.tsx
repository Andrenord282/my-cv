import { lazy } from "react";

export const InitLazy = lazy(() => import("./Init").then(({ Init }) => ({ default: Init })));
