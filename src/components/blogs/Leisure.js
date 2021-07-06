import React, {useEffect,useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as GlobeIcon } from "feather-icons/dist/icons/globe.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import axios from "axios";
import { BASE_API_URL } from "constant_api";

const Container = tw.div`relative`;
const Content = tw.div`max-w-full mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-10 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border border-yellow-700 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-justify text-secondary-500`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "",
  heading = <>Leisure <span tw="text-yellow-700">Tourism.</span></>,
  description = "",

}) => {
  const [LTourismInfoList, SetLTourismInfo]=useState([]);
  useEffect(()=>{
    axios.get(`${BASE_API_URL}/api/ltourisminfo`).then((response)=>{
      SetLTourismInfo(response.data);})
    })


  return (
  <AnimationRevealPage>
      <Header />
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {LTourismInfoList.map((val, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={val.ltourism_imgsrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <GlobeIcon />
                      <div>{val.ltourism_location}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{val.ltourism_title}</Title>
                  <Description>{val.ltourism_descritption}</Description>
                  <Link href="/booking">Book Now</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
    <Footer />
    </AnimationRevealPage>
  );
};

