
import Logo from "../Header/Logo";

export default function LandingPage() {
    let url = "";

    const location = window.location.pathname;
    const lines = location.split('/').filter((line) => line.trim() !== '');
    const filteredLines = lines.filter((line) => !['de', 'en'].includes(line));
    const output = '/' + filteredLines.join('/');

    if (output === "/") {
        url = "/assets/LandingPage-5.jpeg";
    } else if (output === "/zeiten") {
        url = "/assets/LandingPage-2.jpeg";
    } else if (output === "/angebote") {
        url = "/assets/LandingPage-6.jpeg";
    } else if (output === "/ort") {
        url = "/assets/LandingPage-8.jpeg";
    } else if (output === "/wir") {
        url = "/assets/LandingPage-1.jpeg";
    } else if (output === "/termine") {
        url = "/assets/LandingPage-3.jpeg";
    } else if (output === "/news") {
        url = "/assets/LandingPage-7.jpeg";
    } else {
        url = "/assets/LandingPage-5.jpeg";
    }

    return (
        <div className={"LandingPage"}>
            <div className="BackgroundImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${url})` }} />
            <Logo />
        </div>
    );
}