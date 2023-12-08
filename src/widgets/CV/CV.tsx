import { CVHeader } from "./components/CVHeader/CVHeader";
import { CVContacts } from "./components/CVContacts/CVContacts";
import { CVSkills } from "./components/CVSkills";
import { CVEducation } from "./components/CVEducation";
import { CVAboutMe } from "./components/CVAboutMe";
import { CVExperience } from "./components/CVExperience";
import { CVPersonalProjects } from "./components/CVPersonalProjects";
import dataFromJson from "./model/data.json";
import { Data } from "./model/dataType";
import "./style/CV.scss";

const CV = () => {
    const { header, body } = dataFromJson as Data;

    return (
        <div className="cv">
            <div className="cv__container">
                <div className="cv__body">
                    <CVHeader className="cv__header" />
                    <div className="cv__sidebar">
                        <CVContacts className="cv__contacts" contacts={body.contacts} />
                        <CVSkills className="cv__skills" skills={body.skills} />
                        <CVEducation className="cv__educations" education={body.education} />
                    </div>
                    <div className="cv__main-list">
                        <CVAboutMe className="cv__about-me" aboutMe={body["about-me"]} />
                        <CVExperience className="cv__experience" experience={body.experience} />
                        <CVPersonalProjects
                            className="cv__personal-projects"
                            personalProjectsList={body["personal-projects"]}
                        />
                        <CVEducation className="cv__educations cv__educations_mob" education={body.education} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CV };
