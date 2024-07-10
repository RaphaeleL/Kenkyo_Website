import {AiOutlineCopyrightCircle} from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";

import Seperator from "../Pages/Home/Seperator";

export default function Copyright() {
    return (
        <>
            <Seperator />
            <AiOutlineCopyrightCircle />
            &shy;
            Copyright by Karateverein Kenkyo Rheinzabern e.V.
            <Seperator />
        </>
    );
}