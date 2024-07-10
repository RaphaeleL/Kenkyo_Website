// @ts-nocheck
import { Container, Flex, Space } from "@mantine/core";
import Seperator from "../Pages/Home/Seperator";
import SignalIduna from "../Sponsoren/SignalIduna";
//import VRBank from "../Sponsoren/VRBank";
import SponsorenAnsprache from "../Sponsoren/SponsorenAnsprache";
import MyTitle from "../Utils/MyTitle";
import {footer} from "../Content/FooterContent";

export default function Sponsoren(props: any) {
    let current_lang = window.location.pathname.split("/")[1];     
    return (
        <div>
            <Seperator />
            <MyTitle order={4} content={footer[current_lang][7]} />
            <Space h={"md"} />
            <Container>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <SignalIduna />
            </Flex>
            <SponsorenAnsprache current_lang={props.current_lang}/>
            </Container>
        </div>
    );
}