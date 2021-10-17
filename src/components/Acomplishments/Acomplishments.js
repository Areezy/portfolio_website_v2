import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {
    testimonial:
      "Lekan was a fantastic intern at Thousand Eyes on Me. An excellent team member, he contributed to advancing product development working with full-stack dev team and exhibited skill in both engineering and communication.",
    text: "Carrie Jaquith",
  },
  {
    testimonial:
      "Lekan is one of the best among all the people I have ever worked with. He brought all the qualities which are required in a professional and even more at his internship with us. He is a proactive, result-oriented, responsible, and technically sound practitioner who is always ready to put all his energy and time to get the job done. Lekan is a great asset to any company.",
    text: "Ashish Mittal",
  },
  {
    testimonial:
      "Olamilekan is one of the smartest people I’ve collaborated with, he’s always winning to learn more and go out of his comfort zone and a pleasure to work with",
    text: "Oluwasesanfunmi Takuro",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Testimonials</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.testimonial}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
