import classnames from "classnames";
import { ReactElement } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";
import { Contacts } from "../../model/dataType";
import "./style/CVContacts.scss";

interface IconSet {
    [key: string]: () => ReactElement;
}

const Icons: IconSet = {
    telegram: () => <FaTelegram />,
    email: () => <ImMail4 />,
    phone: () => <FaPhoneSquareAlt />,
    location: () => <FaLocationDot />,
};

type CVContactsProps = {
    className: string;
    contacts: Contacts;
};

const CVContacts = (props: CVContactsProps) => {
    const { contacts, className } = props;

    return (
        <ul className={classnames(className, "cv-contacts")}>
            <h3 className="cv-contacts__title">{contacts.title}</h3>
            {contacts.list &&
                contacts.list.length > 0 &&
                contacts.list.map((item) => {
                    return (
                        <li className="cv-contacts__item">
                            <span className="cv-contacts__icon">{Icons[item.icon]()}</span>
                            {item.link && (
                                <a href={item.link} className="cv-contacts__link" target="_blank">
                                    {item.text}
                                </a>
                            )}
                            {!item.link && <span className="cv-contacts__text cv-text"> {item.text}</span>}
                        </li>
                    );
                })}
        </ul>
    );
};

export { CVContacts };
