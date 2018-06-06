import "./SidePanel.css";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import '../../../checkboxAdditional.css';

function template() {
  return (
    <Accordion accordion={false}>
      <AccordionItem expanded={true}>
        <AccordionItemTitle >
          <div className="u-position-relative">
            <span className="am-text-success"><strong>T2ype of bot</strong></span>
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
              <label>Finance</label>
            </div>
          </div>
          <div class="pretty p-icon p-smooth">
            <input type="checkbox" />
            <div class="state p-success">
              <i class="icon material-icons">done</i>
              <label>SAP</label>
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
              <label>Finance</label>
            </div>
          </div>
          <div class="pretty p-icon p-smooth">
            <input type="checkbox" />
            <div class="state p-success">
              <i class="icon material-icons">done</i>
              <label>SAP</label>
            </div>
          </div>

        </AccordionItemBody>
      </AccordionItem>

    </Accordion>
  );
};

export default template;
