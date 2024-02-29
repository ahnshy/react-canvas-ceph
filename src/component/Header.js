import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

export default function Header() {
    const [popup, setPopup] = useState();

    const handleOpenPopup = () => {
        setPopup(popup);
    }

    return (
        <div className="header">
            <h1>
                <Link to="/">K-Ceph</Link>
            </h1>
            <div className="menu">
                <Link to="/" className="link">
                    Ceph View
                </Link>
                <Link to="/Blank" className="link" id="popupDom" onClick={handleOpenPopup}>
                    Modality
                </Link>
                <Link to="#" className="link">
                    Webinar
                </Link>
                <Link to="#" className="link">
                    Settings
                </Link>
            </div>
        </div>
    );
}
