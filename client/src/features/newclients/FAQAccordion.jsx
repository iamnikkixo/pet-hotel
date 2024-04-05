/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'reactstrap';

const FAQAccordion = ({ content }) => {
  const { subheaders } = content;
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Accordion
      open={open}
      toggle={toggle}
      className="row-content info-accordion"
    >
      <AccordionItem>
        {subheaders.map((i, index) => (
          <React.Fragment key={index}>
            <AccordionHeader className="border-bottom h3" targetId={`${index}`}>
              {i.subheader}
            </AccordionHeader>
            <AccordionBody accordionId={`${index}`} className="border-bottom">
              {i.subinfo}
            </AccordionBody>
          </React.Fragment>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
