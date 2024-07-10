// @ts-nocheck
import FooterBody from "../../Footer/FooterBody";
import { Space } from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import Language from "../../Footer/Language";

export default function NoPage(props: any) {
    return (
        <div className={"HomeBody"}>
            <Space h={"xl"} />
            <MyTitle order={1} content={"ERROR"} />

            <FooterBody current_lang={props.current_lang} />
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}


