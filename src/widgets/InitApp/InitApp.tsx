import TypeScriptIcon from "./assets/icons/typescript.svg";
import WebpackIcon from "./assets/icons/webpack.svg";
import BabelIcon from "./assets/icons/babel.svg";
import ReactIcon from "./assets/icons/react.svg";
import ReactRouterDom from "./assets/icons/react-router-dom.svg";
import classes from "./InitApp.module.scss";

const InitApp = () => {
    return (
        <div className={classes.initApp}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h1 className={classes.title}>Init React app</h1>
                    <div className={classes.imgList}>
                        <TypeScriptIcon className={classes.imgListItem} />
                        <WebpackIcon className={classes.imgListItem} />
                        <BabelIcon className={classes.imgListItem} />
                        <ReactIcon className={classes.imgListItem} />
                        <ReactRouterDom className={classes.imgListItem} />
                    </div>
                    <div className={classes.descr}>
                        <div className={classes.descrItem}>
                            <h4 className={classes.descrItemTitle}>devDependencies tools-list:</h4>
                            <ul className={classes.descrList}>
                                <li>webpack</li>
                                <li>webpack-cli</li>
                                <li>webpack-dev-server</li>
                                <li>webpack-bundle-analyzer</li>
                                <li>typescript</li>
                                <li>babel-loader</li>
                                <li>@babel/core</li>
                                <li>@babel/preset-react</li>
                                <li>@babel/preset-typescript</li>
                                <li>@babel/preset-env</li>
                                <li>fork-ts-checker-webpack-plugin</li>
                                <li>html-webpack-plugin</li>
                                <li>sass</li>
                                <li>sass-loader</li>
                                <li>css-loader</li>
                                <li>style-loader</li>
                                <li>mini-css-extract-plugin</li>
                                <li>typescript-plugin-css-modules</li>
                                <li>@svgr/webpack</li>
                                <li>copy-webpack-plugin</li>
                                <li>react-refresh</li>
                                <li>react-refresh-typescript</li>
                                <li>@pmmmwh/react-refresh-webpack-plugin</li>
                            </ul>
                        </div>
                        <div className={classes.descrItem}>
                            <h4 className={classes.descrItemTitle}>dependencies tools-list:</h4>
                            <ul className={classes.descrList}>
                                <li>react</li>
                                <li>react-dom</li>
                                <li>react-router-dom</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.author}>
                        <a href="https://github.com/Andrenord282" target="_blank">
                            GitHub
                        </a>
                        <a href="https://t.me/stohelitskii" target="_blank">
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { InitApp };
