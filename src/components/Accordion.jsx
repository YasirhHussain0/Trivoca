import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function AccordionItem({ title, content, isOpen, onToggle }) {
    return (
        <div className="accordion-item" onClick={onToggle}>

            <div className="accordion-header">
                {title} {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>

            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

export default AccordionItem;   