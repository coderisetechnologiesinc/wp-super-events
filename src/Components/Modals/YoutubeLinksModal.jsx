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

import { v4 as uuidv4 } from "uuid";

import SortableRow from "../Shared/SortableRow";

const YoutubeLinksModal = ({ youtubeVideos, setYoutubeVideos }) => {
  const [input, setInput] = useState("");

  const onDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    setYoutubeVideos((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const removeVideo = (id) => {
    setYoutubeVideos((prev) => prev.filter((v) => v.id !== id));
  };

  const editVideo = (id) => {
    const item = youtubeVideos.find((v) => v.id === id);
    if (!item) return;

    setInput(item.url);
    removeVideo(id);
  };

  const addVideo = () => {
    if (!input) return;

    setYoutubeVideos((prev) => [...prev, { id: uuidv4(), url: input }]);

    setInput("");
  };

  return (
    <BlockStack gap={4}>
      {/* List */}
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={youtubeVideos.map((v) => v.id)}
          strategy={verticalListSortingStrategy}
        >
          <BlockStack gap={2}>
            {youtubeVideos.map((v) => (
              <SortableRow
                key={v.id}
                id={v.id}
                title={v.url}
                onEdit={() => editVideo(v.id)}
                onRemove={() => removeVideo(v.id)}
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
            placeholder="Type your link here"
            value={input}
            onChange={setInput}
            align="left"
          />

          <button
            type="button"
            onClick={addVideo}
            disabled={!input}
            className="p-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50"
          >
            {/* <PlusCircleIcon className="w-6 h-6" /> */}
            Add
          </button>
        </InlineStack>
      </div>
    </BlockStack>
  );
};

export default YoutubeLinksModal;
