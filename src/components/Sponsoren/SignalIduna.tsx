import { Image } from "@mantine/core";

export default function SignalIduna() {
    return (
        <a 
            href="http://Bezirksdirektion-pfirmann.de" 
            target="_blank"
            rel="noreferrer">
            <Image
                width={250}
                className="click"
                radius="md"
                src={"/assets/SILogo.png"}
                alt="Signal Iduna"
                withPlaceholder
            />
        </a>
    );
}