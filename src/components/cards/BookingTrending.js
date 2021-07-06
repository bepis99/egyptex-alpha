import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import axios from "axios";
import { Alert } from "bootstrap";
import { BASE_API_URL } from "constant_api";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-yellow-700 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;
export default () => {
   //const booking = {href="/booking"};
   
  const [TourInfoList, SetTourInfo]=useState([]);
  useEffect(()=>{
    axios.get(`${BASE_API_URL}/api/tourinfo`).then((response)=>{
      SetTourInfo(response.data);})
    }
    ,[])




 
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Trending Tours</HeadingTitle>
              <HeadingDescription>
                A fine selection of the most trending tours in Egypt.
              </HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>
          {TourInfoList.map((val, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={val.tour_imgsrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{val.tour_type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{val.tour_priceperday}</CardPriceAmount> per day
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{val.tour_title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TrendingIcon /> {val.tour_special}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <TimeIcon /> {val.tour_duration}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {val.tour_location}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction onClick={()=>{window.location.replace("/login")}}>Book Now</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
