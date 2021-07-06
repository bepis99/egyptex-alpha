import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import Axios from "axios";
import { BASE_API_URL } from "constant_api";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm text-justify leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 2.5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  const [HotelInfoList, SetHotelInfo]=useState([]);
  useEffect(()=>{
    Axios.get(`${BASE_API_URL}/api/toursbookinginfo`).then((response)=>{
      SetHotelInfo(response.data);})
    })

  
  

  return (
    
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Tours</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {HotelInfoList.map((val, index) => (
            <Card key={index}>
              <CardImage imageSrc={val.imgsrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{val.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{val.location}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{val.price}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{val.desc}</Description>
              </TextInfo>
              <PrimaryButton onClick={()=>{alert="Please sign in first!"; window.location.replace("/login")}}>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};


/* Change this according to your needs */  
  /* const for front-end data (deprecated, implemented back-end json resposne) */
  /*const cards = [
    {
      imageSrc: "",
      title: "",
      description: "",
      locationText: "",
      pricingText: "",
      rating: "",
    },
    {
      imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d2/fc/2a/exterior.jpg?w=1100&h=-1&s=1",
      title: "Kempinski Nile Hotel",
      description: "This sophisticated hotel in an affluent, downtown district is 2 km from both the Egyptian Museum and the Cairo Opera House.",
      locationText: "Cairo",
      pricingText: "USD 131/Day",
      rating: 4.5,
    },
    {
      imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d1/35/a8/steigenberger-pyramids.jpg?w=1100&h=-1&s=1",
      title: "Steigenberger Pyramids",
      description: "This upscale hotel is 3 km from both the ancient Egyptian Khufu ship and the Pyramid of Khafre.",
      locationText: "Giza",
      pricingText: "USD 75/Day",
      rating: "5.0",
    },
    {
      imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6b/5c/06/sofitel-cairo-el-gezirah.jpg?w=1200&h=-1&s=1",
      title: "Sofitel Cairo Nile El Gezirah",
      description: "Overlooking the River Nile, this upscale hotel in the Zamalek district is a 9-minute walk from Opera metro station and 2 km from the Egyptian Museum.",
      locationText: "Cairo",
      pricingText: "USD 117/Day",
      rating: 4.5,
    },
  ]*/