import React from "react";
import BlockStack from "./BlockStack";
import CollapsibleSection from "./CollapsibleSection";
import CheckboxItem from "../Controls/CheckboxItem";

const sectionTitle = (filter) =>
  filter.charAt(0).toUpperCase() + filter.slice(1);

// The filter groups every events surface shows: one section per filter kind
// (category, language, location, member) with a checkbox per value.
//
// collapsible=false renders plain headings instead of CollapsibleSection, which
// is what the mobile filter sheets use — there is no room to expand there.
const FilterGroupList = ({
  filtersList = {},
  selectedFilters = {},
  onSelect = () => {},
  collapsible = true,
}) =>
  Object.keys(filtersList).map((filter) => {
    const items = filtersList[filter];
    if (!items || items.length === 0) return null;

    const checkboxes = items.map((item) => (
      <CheckboxItem
        key={item.id}
        label={item.name}
        checked={selectedFilters[filter]?.includes(item.id) || false}
        onChange={() => onSelect(filter, item.id)}
      />
    ));

    if (!collapsible) {
      return (
        <div key={filter} className="mb-3">
          <div className="font-semibold mb-1">{sectionTitle(filter)}</div>
          {checkboxes}
        </div>
      );
    }

    return (
      <CollapsibleSection key={filter} sectionHeading={sectionTitle(filter)}>
        <BlockStack gap={2}>{checkboxes}</BlockStack>
      </CollapsibleSection>
    );
  });

export default FilterGroupList;
