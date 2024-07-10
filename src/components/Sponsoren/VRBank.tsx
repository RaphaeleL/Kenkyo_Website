import { Image } from "@mantine/core";

export default function VRBank() {
    return (
        <a 
            href="https://www.vrbank-suedpfalz.de/startseite.html" 
            target="_blank"
            rel="noreferrer">
            <Image
                width={250}
                className="click"
                radius="md"
                src={"https://raw.githubusercontent.com/KarateKenkyo/Data/63b514016cfd3d23c44180735baf0325427e6b7f/assets/vrbank.png"}
                alt="Signal Iduna"
                withPlaceholder
            />
        </a>
    );
}