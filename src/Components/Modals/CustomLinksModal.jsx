import React, { useState } from "react";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import NewInputFieldControl from "../Controls/NewInputFieldControl";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

import SortableRow from "../Shared/SortableRow";

const CustomLinksModal = ({ links, setLinks }) => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  /* ✅ Drag reorder */
  const onDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    setLinks((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  /* ✅ Remove */
  const removeLink = (id) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  /* ✅ Edit */
  const editLink = (id) => {
    const item = links.find((l) => l.id === id);
    if (!item) return;

    setText(item.text);
    setUrl(item.url);
    removeLink(id);
  };

  /* ✅ Add */
  const addLink = () => {
    if (!text || !url) return;

    setLinks((prev) => [...prev, { id: uuidv4(), text, url }]);

    setText("");
    setUrl("");
  };

  return (
    <BlockStack gap={4}>
      {/* List */}
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={links.map((l) => l.id)}
          strategy={verticalListSortingStrategy}
        >
          <BlockStack gap={2}>
            {links.map((link) => (
              <SortableRow
                key={link.id}
                id={link.id}
                title={link.text}
                subtitle={link.url}
                onEdit={() => editLink(link.id)}
                onRemove={() => removeLink(link.id)}
              />
            ))}
          </BlockStack>
        </SortableContext>
      </DndContext>

      {/* ✅ Add at Bottom */}
      <div className="border-t pt-4">
        <InlineStack gap={2}>
          <NewInputFieldControl
            width="100%"
            placeholder="Link title"
            value={text}
            onChange={setText}
            align="left"
            maxLength="23"
          />

          <NewInputFieldControl
            width="100%"
            placeholder="https://example.com"
            value={url}
            onChange={setUrl}
            align="left"
          />

          <button
            type="button"
            onClick={addLink}
            disabled={!text || !url}
            className="p-2 rounded-lg bg-[#7a5af8] text-white disabled:opacity-50"
          >
            {/* <PlusCircleIcon className="w-6 h-6" /> */}
            Add
          </button>
        </InlineStack>
      </div>
    </BlockStack>
  );
};

export default CustomLinksModal;
