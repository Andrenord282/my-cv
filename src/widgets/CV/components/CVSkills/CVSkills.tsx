import classnames from "classnames";
import { Skills } from "../../model/dataType";
import "./style/CVSkills.scss";

type CVSkillsProps = {
    className: string;
    skills: Skills;
};

const CVSkills = (props: CVSkillsProps) => {
    const { className, skills } = props;

    return (
        <ul className={classnames(className, "cv-skills")}>
            <h3 className="cv-skills__title cv-title">{skills.title}</h3>
            {skills.list &&
                skills.list.length > 0 &&
                skills.list.map((item) => {
                    return <li className="cv-skills__item cv-text">{item}</li>;
                })}
        </ul>
    );
};

export { CVSkills };
