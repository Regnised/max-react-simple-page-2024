import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [tabContent, setTabContent] = useState('components');

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onSelect={() => handleSelect('props')}
            >
              PROPS
            </TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onSelect={() => handleSelect('state')}
            >
              STATE
            </TabButton>
          </menu>
          {EXAMPLES[tabContent] && (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>

              {tabContent}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
