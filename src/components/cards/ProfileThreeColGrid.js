import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import axios from "axios";
import { BASE_API_URL } from "constant_api";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-cover rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-yellow-700`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

/*const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-yellow-700 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`*/

export default () => {

   const heading = "Meet The Team";
   const subheading = "";
   const description = "A team of young Egyptian programmers set on exceeding the markets expectations.";

  const [MemberInfoList, SetMemberInfo]=useState([]);
  useEffect(()=>{
    axios.get(`${BASE_API_URL}/api/memberinfo`).then((response)=>{
      SetMemberInfo(response.data);})
    })

 

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {MemberInfoList.map((val, index) => (
            <Card key={index}>
              <CardImage imageSrc={val.member_imgsrc} />
              <CardContent>
                <span className="position">{val.member_position}</span>
                <span className="name">{val.member_name}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
