// @ts-nocheck

import {items} from "../Content/MenuContent";
import {Title, Space} from "@mantine/core";
import {dojo, offers, times} from "../Content/TrainerContent";

export default function MenuItems(props: any) {
    let current_lang = window.location.pathname.split("/")[1];

    return (
        <>
            <a href={`/${current_lang}/`} className="anormal">
                <Title order={2} className="click">
                    {items[current_lang][0]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/ort`} className="anormal">
                <Title order={2} className="click">
                    {dojo[current_lang][0]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/zeiten`} className="anormal">
                <Title order={2} className="click">
                    {times[current_lang][0]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/angebote`} className="anormal">
                <Title order={2} className="click">
                    {offers[current_lang][0]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/wir`} className="anormal">
                <Title order={2} className="click">
                    {items[current_lang][2]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/termine`} className="anormal">
                <Title order={2} className="click">
                    {items[current_lang][3]}
                </Title>
            </a>
            <Space h="xs" />
            <a href={`/${current_lang}/news`} className="anormal">
                <Title order={2} className="click">
                    {items[current_lang][4]}
                </Title>
            </a>
        </>

    );
}
