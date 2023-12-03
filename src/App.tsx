import cvPdf from "./assets/pdf/my-cv.pdf";

const App = () => {
    return (
        <div>
            <iframe src={cvPdf} style={{ width: "100%", minHeight: "100vh" }}></iframe>
        </div>
    );
};

export { App };
