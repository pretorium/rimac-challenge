import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = props;

  const handleActiveCard = (indexTab) => {
    setActiveTab(indexTab);
  };

  return (
    <div className="tabsComponent">
      <div className="tabsComponent__container">
        {data.length && data.map(({ tabName }, idx) => (
          <div
            key={`tab-${idx}`}
            className={`tab ${activeTab === idx ? 'tab--active' : ''}`}
            aria-hidden="true"
            data-width={`${data.length}`}
            onClick={() => handleActiveCard(idx)}
          >
            <h4 className="tab__name">
              {tabName}
            </h4>
          </div>
        ))}
      </div>
      <div className="tabsComponent__list">
        {data.length && data[activeTab].tabData.map((item, idx) => (
          <div className="listItem" key={`tabItem-${idx}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    tabName: PropTypes.string,
    tabData: PropTypes.arrayOf(PropTypes.node),
  })),
};

Tabs.defaultProps = {
  data: [
    {
      tabName: 'Tab 1\nPrueba',
      tabData: [
        <div>Tab 1 Item 1</div>,
        <div>Tab 1 Item 2</div>,
        <div>Tab 1 Item 3</div>,
      ],
    },
    {
      tabName: 'Tab 2\nPrueba',
      tabData: [
        <div>Tab 2 Item 1</div>,
        <div>Tab 2 Item 2</div>,
        <div>Tab 2 Item 3</div>,
      ],
    },
  ],
};

export default Tabs;
