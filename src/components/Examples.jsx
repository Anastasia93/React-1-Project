import { useState } from "react";
import { EXAMPLES } from "../data.js";

import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please, select a topic.</p>;

  if (selectedTopic) {
    tabContent = (<>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </>
    );
  }

  function handleSelect(selectedButtonValue) {
    setSelectedTopic(selectedButtonValue);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}