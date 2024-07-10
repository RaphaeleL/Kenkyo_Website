// @ts-nocheck
import {Image} from "@mantine/core";
import {cookies} from "../Content/HomeContent";
import {hideNotification, showNotification} from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export default function Language(props: any) {
    const history = useNavigate();

    function showCookieBanner(lang: any) {
        hideNotification("cookies");
        showNotification({
            className: "cookies",
            id: "cookies",
            title: "Cookies",
            disallowClose: false,
            color: 'blue',
            loading: false,
            autoClose: true,
            message: cookies[lang][0]
        });
    }

    function handleLang(language) {
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/\/(de|en|ja|un|uk)\//, `/${language}/`);
        history(newPath);
        showCookieBanner(language)
    }

    return (
        <div className={"FloatingLangChooser"}>
            <div onClick={() => handleLang("uk")} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 0, margin: 10}}>
                <Image radius={"md"} src={"/assets/UKR.png"} />
            </div>
            <div onClick={() => handleLang("ja")} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 40, margin: 10}}>
                <Image radius={"md"} src={"/assets/JAP.png"} />
            </div>
            <div onClick={() => handleLang("un")} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 80, margin: 10}}>
                <Image radius={"md"} src={"/assets/UNG.png"} />
            </div>
            <div onClick={() => handleLang("en")} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 120, margin: 10}}>
                <Image radius={"md"} src={"/assets/ENG.png"} />
            </div>
            <div onClick={() => handleLang("de")} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 160, margin: 10}}>
                <Image radius={"md"} src={"/assets/GER.png"} />
            </div>
        </div>
    );
}
