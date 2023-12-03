import cvPdf from "./assets/pdf/my-cv.pdf";

const App = () => {
    return (
        <div>
            <iframe src={cvPdf} style={{ minWidth: "100vw", minHeight: "100vh" }}></iframe>
        </div>
    );
};

export { App };
