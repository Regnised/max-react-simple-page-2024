import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';

import TabButton from './TabButton';
import Tabs from './Tabs';

export default function Examples() {
  const [tabContent, setTabContent] = useState('components');
  let content;

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  if (tabContent) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>

        {tabContent}
      </div>
    );
  } else {
    content = 'Click the tab, please';
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tabContent === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onClick={() => handleSelect('props')}
            >
              PROPS
            </TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onClick={() => handleSelect('state')}
            >
              STATE
            </TabButton>
          </>
        }
      >
        {content}
      </Tabs>
    </Section>
  );
}
