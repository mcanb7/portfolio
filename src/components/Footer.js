import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import{
    faLinkedin,
    faGithub,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Hakkımda</Heading>
			<FooterLink href="/about">Hakkımda</FooterLink>
		</Column>
		<Column>
			<Heading>Çalışmalarım</Heading>
			<FooterLink href="https://vektoregitim.net" target="_blank">Vektör Eğitim</FooterLink>
			<FooterLink href="https://bmsyapiotomasyon.com" target="_blank">BMS Yapı Otomasyon</FooterLink>
			<FooterLink href="http://perfecthousemersin.com/" target="_blank">Perfect House</FooterLink>
		</Column>
		<Column>
			<Heading>İletişim</Heading>
			<FooterLink href="/contact">iletişime geçin</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
            <a href="https://www.linkedin.com/in/mcanbayram/" target="_blank" className="linkedin social ">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
			</FooterLink>
			<FooterLink href="#">
            <a href="https://github.com/mcanb7" target="_blank" className="github2 social ">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
			</FooterLink>
			<FooterLink href="#">
			<a href="https://twitter.com/mhmtcnbyrm7" target="_blank" className="twitter social ">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
			</FooterLink>
			<FooterLink href="#">
            <a href="https://www.instagram.com/mahmutcanbayrm7/" target="_blank" className="instagram social ">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>

			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
