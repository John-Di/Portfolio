import React from "react";
import InnerSection from "../inner-section";
import Moment from 'react-moment';
import {
  faCalendar,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import IconBullet from '../../components/icon-bullet';
import ImageFloatText from '../image-float-text';
import {
  TOGGLE,
  CAREER,
  DUTY,
  EMPLOYER,
  INFO,
  DURATION,
  DATE
} from './styles';

Moment.globalLocale = 'en-ca';

export default function Work({ data }) {
  const work = data;
  const label = (
    <TOGGLE>
      <IconBullet
        icon={faLaptopCode}
        textContent={work.position}
        gap={{
          regular: '0.75em',
          resp: {
            device: 'tablet',
            value: '0.875em'
          }
        }}
      />
      <DURATION
        icon={faClock}
        startDate={work.startDate}
        endDate={work.endDate}
      >
        <Moment
          duration={work.startDate}
          date={work.endDate}
        />
      </DURATION>
    </TOGGLE>
  );

  return (
    <InnerSection
      heading={label}
      className={'Collapsible--work'}

    >
      <ImageFloatText
        url={work.url}
        image={work.image}
      >
        <INFO>
          <EMPLOYER>{work.name}</EMPLOYER>
          <IconBullet
            icon={faCalendar}
            textSize={`0.75em`}
            gap={`0.5em`}
            textContent={
              <DATE
                // icon={faCalendar}
                startDate={work.startDate}
                endDate={work.endDate}
              >
                {work.startDate} - {work.endDate}
              </DATE>
            }
          />
        </INFO>
        <CAREER>
          {work.highlights.map((highlight, i) => <DUTY key={`highlight_${i}`}>{highlight}</DUTY>)}
        </CAREER>
      </ImageFloatText>
    </InnerSection>
  )
}
