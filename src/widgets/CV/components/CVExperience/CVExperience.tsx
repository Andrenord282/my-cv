import classnames from "classnames";
import { Experience } from "../../model/dataType";
import "./style/CVExperience.scss";

type CVExperienceProps = {
    className: string;
    experience: Experience;
};

const CVExperience = (props: CVExperienceProps) => {
    const { className, experience } = props;

    return (
        <ul className={classnames(className, "cv-experience")}>
            <h3 className="cv-experience__title cv-title">{experience.title}</h3>
            {experience.list &&
                experience.list.length > 0 &&
                experience.list.map((item) => {
                    return (
                        <li className="cv-experience__item">
                            <p className="cv-experience__item-position">{item.position}</p>
                            <p className="cv-experience__item-company cv-text">
                                <span>{item.company}</span>{" "}
                                <a href={item["company-link"]} target="_blank">
                                    {item["company-link"]}
                                </a>
                            </p>
                            <p className="cv-experience__item-years cv-text">{item.years}</p>
                            <ul className="cv-experience__item-responsibilities">
                                {item.responsibilities &&
                                    item.responsibilities.length > 0 &&
                                    item.responsibilities.map((item) => {
                                        return (
                                            <li className="cv-experience__item-responsibilities-text cv-text">
                                                {item}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
        </ul>
    );
};

export { CVExperience };
