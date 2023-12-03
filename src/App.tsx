import cvPdf from "./assets/pdf/my-cv.pdf";

const App = () => {
    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <iframe src={cvPdf} style={{ width: "100%", minHeight: "100%" }}></iframe>
        </div>
    );
};

export { App };
