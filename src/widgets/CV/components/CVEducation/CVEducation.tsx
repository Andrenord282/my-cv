import classnames from "classnames";
import { Education } from "../../model/dataType";
import "./style/CVEducation.scss";

type CVEducationProps = {
    className: string;
    education: Education;
};

const CVEducation = (props: CVEducationProps) => {
    const { education, className } = props;

    return (
        <ul className={classnames(className, "cv-education")}>
            <h3 className="cv-education__title cv-title">{education.title}</h3>
            {education.list &&
                education.list.length > 0 &&
                education.list.map((item) => {
                    return (
                        <li className="cv-education__item">
                            <span className="cv-education__name cv-text">{item.name}</span>
                            <span className="cv-education__years cv-text">{item.years}</span>
                            <span className="cv-education__faculty cv-text">{item.faculty}</span>
                        </li>
                    );
                })}
        </ul>
    );
};

export { CVEducation };
