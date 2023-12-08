import classnames from "classnames";
import dataFromJson from "../../model/data.json";
import { Data } from "../../model/dataType";
import "./style/CVHeader.scss";

type CVHeaderProps = {
    className: string;
};

const CVHeader = (props: CVHeaderProps) => {
    const { className } = props;
    const data = dataFromJson as Data;

    return (
        <div className={classnames(className, "cv-header")}>
            <div className="cv-header__content">
                <div className="cv-header__descr">
                    <h3 className="cv-header__descr-title">
                        {data.header.firstName} {data.header.lastName}
                    </h3>

                    <h2 className="cv-header__descr-subtitle">{data.header.position}</h2>
                </div>
                <div className="cv-header__photo-item">
                    {<img className="cv-header__photo-img" src={data.header.photo} alt="" />}
                </div>
            </div>
        </div>
    );
};

export { CVHeader };
