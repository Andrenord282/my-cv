import classnames from "classnames";
import { AboutMe } from "../../model/dataType";
import "./style/CVAboutMe.scss";

type CVAboutMeProps = {
    className: string;
    aboutMe: AboutMe;
};

const CVAboutMe = (props: CVAboutMeProps) => {
    const { className, aboutMe } = props;

    return (
        <div className={classnames(className, "cv-about-me")}>
            <h2 className="cv-about-me__title cv-title">{aboutMe.title}</h2>
            <p className="cv-about-me__text cv-text">{aboutMe.text}</p>
        </div>
    );
};

export { CVAboutMe };
