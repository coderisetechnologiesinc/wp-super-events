import React, { Fragment } from "react";

import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import SortableItem from "../Shared/SortableItem";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

const LinkInBioModal = ({
  /* ---------------- SOCIAL ---------------- */
  instagram,
  setInstagram,
  x,
  setX,
  youtube,
  setYoutube,
  facebook,
  setFacebook,
  tiktok,
  setTikTok,

  /* ---------------- LINKS ---------------- */
  linkTextInput,
  setLinkTextInput,
  linkUrlInput,
  setLinkUrlInput,
  links,
  setLinks,
  handleLinksDragEnd,
  handleRemoveLink,

  /* ---------------- VIDEOS ---------------- */
  videoInput,
  setVideoInput,
  youtubeVideos,
  setYoutubeVideos,
  handleRemoveYoutube,

  /* ---------------- ORDER ---------------- */
  order,
  setOrder,

  responsiveBlock,
}) => {
  return (
    <Fragment>
      {/* ===================================================== */}
      {/* ✅ SOCIAL MEDIA */}
      {/* ===================================================== */}
      <div className="step__content_block">
        <span className="step__content_title">Social media</span>
        <p className="text-sm text-gray-500 mb-4">
          Add your main social profiles shown inside the widget
        </p>

        <BlockStack gap={4} className={responsiveBlock}>
          {/* Instagram */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Instagram Profile
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="https://instagram.com/yourname"
              value={instagram}
              onChange={setInstagram}
              align="left"
            />
          </div>

          {/* X */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              X (Twitter) Profile
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="https://x.com/yourname"
              value={x}
              onChange={setX}
              align="left"
            />
          </div>

          {/* YouTube */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              YouTube Channel
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="https://youtube.com/@channel"
              value={youtube}
              onChange={setYoutube}
              align="left"
            />
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Facebook Page
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="https://facebook.com/page"
              value={facebook}
              onChange={setFacebook}
              align="left"
            />
          </div>

          {/* TikTok */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              TikTok Profile
            </p>
            <NewInputFieldControl
              width="100%"
              placeholder="https://tiktok.com/@yourname"
              value={tiktok}
              onChange={setTikTok}
              align="left"
            />
          </div>
        </BlockStack>
      </div>
    </Fragment>
  );
};

export default LinkInBioModal;
