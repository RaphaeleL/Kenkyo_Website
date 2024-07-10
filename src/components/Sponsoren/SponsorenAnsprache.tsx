// @ts-nocheck
import { Text } from "@mantine/core";
import {footer} from "../Content/FooterContent";

export default function SponsorenAnsprache(props: any) {
    let current_lang = window.location.pathname.split("/")[1];     
    return (
        <Text fs="italic"> {footer[current_lang][20]} </Text>
    );
}