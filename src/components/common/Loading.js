import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => (
    <div className="w-full h-screen top-0 left-0 fixed bg-background z-10 flex items-center justify-center">
        <CircularProgress />
    </div>
);
export default Loading;
