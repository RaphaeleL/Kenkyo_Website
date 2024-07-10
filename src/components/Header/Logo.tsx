import { Image } from '@mantine/core';

export default function Logo() {
    return (
        <div className={"Logo"}>
            <Image
                alt={"Logo"}
                src={"/assets/Logo-Kenkyo.png"}
            />
        </div>
    );
}