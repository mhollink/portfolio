import type {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from "~design-system/components/typography/Typography.tsx";
import {IconButton} from "~design-system/components/button/IconButton.tsx";
import {FaGithub, FaLinkedin, FaLinkedinIn} from "react-icons/fa";
import {Flex} from "~design-system/components/layout/flex/Flex.tsx";
import {Button} from "~design-system/components/button/Button.tsx";

export const Contact: FunctionComponent = () => {
    const {t} = useTranslation('contact');
    return (
        <section id="contact" className="contact">
            <div className="contact__wrapper">
                <div className="contact__inner">
                    <Typography variant="h2">{t('heading')}</Typography>
                    <Typography style={{textWrap: "pretty"}}>
                        {t('description')}
                    </Typography>

                    <div style={{width: "fit-content", margin: "0 auto"}}>

                        <Button variant="primary" appearance="outlined">
                        <span style={{display: "flex", gap: "8px", alignItems: "center"}}>
                            <FaLinkedin fontSize="1.25rem"/>
                            <span style={{fontWeight: "bold", fontSize: "0.8rem"}}>Verbind met mij op LinkedIn</span>
                        </span>
                        </Button>

                    </div>

                    <Flex gap="sm" justify="center">
                        <IconButton
                            appearance="outlined"
                            onClick={() => window.open("https://github.com/mhollink", "_blank")}
                        >
                            <FaGithub/>
                        </IconButton>

                        <IconButton
                            appearance="outlined"
                            onClick={() => window.open("https://github.com/mhollink", "_blank")}
                        >
                            <FaLinkedinIn/>
                        </IconButton>
                    </Flex>
                </div>
            </div>
        </section>
    );
};
