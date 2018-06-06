import "./AccordianMenu.css";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import '../../../checkboxAdditional.css';

function template() {
  return (

    <Tabs onSelect={index => console.log(index)}>
      <TabList>
        <Tab>Filter By</Tab>
      </TabList>

      <TabPanel>
        <Accordion accordion={false}>
          <AccordionItem expanded={true}>
            <AccordionItemTitle >
              <div className="u-position-relative">
                <span className="am-text-success"><strong>By Type</strong></span>
                <div className="am-fr am-text-success">
                  <i className="accordion__arrow" role="presentation" />
                </div>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>All Bots</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Process Bots</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Chatbots</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Composite Bots</label>
                </div>
              </div>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem expanded={true}>
            <AccordionItemTitle>
              <div className="u-position-relative">
                <span className="am-text-success"><strong>By Business Process</strong></span>
                <div className="am-fr am-text-success">
                  <i className="accordion__arrow" role="presentation" />
                </div>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>All Bots</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Recently Published</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Popular</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Human Resources</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Procurement</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Information Technology</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Business Management</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>Engineering</label>
                </div>
              </div>

            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <div className="u-position-relative">
                <span className="am-text-success"><strong>By SBG</strong></span>
                <div className="am-fr am-text-success">
                  <i className="accordion__arrow" role="presentation" />
                </div>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>AERO</label>
                </div>
              </div>

              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>CORP</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>HBT</label>
                </div>
              </div>
              <div class="pretty p-icon p-smooth">
              <input type="checkbox" />
              <div class="state p-success">
                <i class="icon material-icons">done</i>
                <label>SPS</label>
              </div>
            </div>
            <div class="pretty p-icon p-smooth">
                <input type="checkbox" />
                <div class="state p-success">
                  <i class="icon material-icons">done</i>
                  <label>PMT</label>
                </div>
              </div>
            </AccordionItemBody>
          </AccordionItem>

        </Accordion>
      </TabPanel>

    </Tabs>

  );
};

export default template;
