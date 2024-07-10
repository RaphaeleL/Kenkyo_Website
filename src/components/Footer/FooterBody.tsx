// @ts-nocheck
import {Container, Divider, Flex, Stack, Title} from "@mantine/core";
import React, {useState, useEffect} from "react";
import {faq, footer} from "../Content/FooterContent";
import Copyright from "./Copyright";
import Seperator from "../Pages/Home/Seperator";
import Satzung from "./SubPages/Satzung";
import Pruefungsordnung from "./SubPages/Pruefungsordnung";
import Wettkampfregeln from "./SubPages/Wettkampfregeln";
import Kontakt from "./SubPages/Kontakt";
import Anmeldeformular from "./SubPages/Anmeldeformular";
import Kuendigungsvorlage from "./SubPages/Kuendigungsvorlage";
import {cookies} from "../Content/HomeContent";

export default function FooterBody(props: any) {
    let current_lang = window.location.pathname.split("/")[1]; 
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <div className={"Footer"}>
            <Seperator />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][1]}</Title>
                    <a href={`/${current_lang}/impressum`}>{footer[current_lang][2]}</a>
                    <a href={`/${current_lang}/datenschutz`}>{footer[current_lang][3]}</a>
                    <Kontakt current_lang={props.current_lang}/>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][5]}</Title>

                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="flex-start"
                        direction="row"
                        wrap="wrap"
                    >
                        <Stack>
                            <a href={`/${current_lang}/wissenswertes/begrifflichkeiten`}>{footer[current_lang][9]}</a>
                            <a href={`/${current_lang}/wissenswertes/geschichte`}>{footer[current_lang][11]}</a>
                            <a href={`/${current_lang}/wissenswertes/faq`}>{faq[current_lang][0]}</a>
                        </Stack>
                        {/*<Stack>
                            <Verbaende current_lang={props.current_lang} />
                        </Stack>*/}
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][16]}</Title>
                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="flex-start"
                        direction="row"
                        wrap="wrap"
                    >
                        <Stack>
                            <Anmeldeformular current_lang={props.current_lang} title={footer[current_lang][12]} />
                            <Kuendigungsvorlage current_lang={props.current_lang} title={footer[current_lang][13]} />
                            {/*<Text c={"dimmed"}>{footer[current_lang][14]}</Text>*/}
                        </Stack>
                        <Stack>
                            <Pruefungsordnung current_lang={props.current_lang} title={footer[current_lang][15]} />
                            <Wettkampfregeln  current_lang={props.current_lang} title={footer[current_lang][17]} />
                            <Satzung  current_lang={props.current_lang} title={footer[current_lang][8]} />
                        </Stack>
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
            </Flex>
            <Copyright />
            <Container>
                {cookies[current_lang][0]}
            </Container>
            <Seperator />
        </div>
    );
}
