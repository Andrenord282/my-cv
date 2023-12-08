import classnames from "classnames";
import { PersonalProjects } from "../../model/dataType";
import "./style/CVPersonalProjects.scss";

type CVPersonalProjectsProps = {
    className: string;
    personalProjectsList: PersonalProjects;
};

const CVPersonalProjects = (props: CVPersonalProjectsProps) => {
    const { className, personalProjectsList } = props;

    return (
        <ul className={classnames(className, "cv-personal-projects")}>
            <h3 className="cv-personal-projects__title cv-title">{personalProjectsList.title}</h3>
            {personalProjectsList.list &&
                personalProjectsList.list.length > 0 &&
                personalProjectsList.list.map((item) => {
                    return (
                        <li key={item.title} className="cv-personal-projects__item">
                            <p className="cv-personal-projects__item-title">{item.title}</p>
                            {item.links &&
                                item.links.length > 0 &&
                                item.links.map((item) => {
                                    return (
                                        <a
                                            key={item}
                                            href={item}
                                            target="_blank"
                                            className="cv-personal-projects__item-link cv-text"
                                        >
                                            {item}
                                        </a>
                                    );
                                })}
                            <ul className="cv-personal-projects__item-descr">
                                {item.descr &&
                                    item.descr.length > 0 &&
                                    item.descr.map((item) => {
                                        return (
                                            <li className="cv-personal-projects__item-descr-text cv-text">{item}</li>
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
        </ul>
    );
};

export { CVPersonalProjects };
