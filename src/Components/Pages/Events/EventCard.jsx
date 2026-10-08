import { useEffect, useState } from "react";
import {
  ClockIcon,
  EyeIcon,
  MapPinIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import styles from "./EventCard.module.scss";

const PLACEHOLDER_IMAGE = `${window.servvData.pluginUrl}public/assets/images/placeholder.png`;

const WP_API_BASE = "/wp-json/wp/v2/posts";

const imageCache = new Map();

const EventCard = ({ meeting, handleOpenEvent }) => {
  const postId = meeting?.post_id;
  // console.log(meeting);
  const [imageSrc, setImageSrc] = useState(
    imageCache.get(postId) || PLACEHOLDER_IMAGE,
  );
  const getMeetingURL = () => {
    fetch(`/wp-json/wp/v2/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => {
        open(post.link, "_blank");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (!postId) return;

    if (imageCache.has(postId)) {
      const cached = imageCache.get(postId);
      setImageSrc((prev) => (prev === cached ? prev : cached));
      return;
    }

    const controller = new AbortController();

    fetch(`${WP_API_BASE}/${postId}?_embed`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((post) => {
        const url =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          PLACEHOLDER_IMAGE;

        imageCache.set(postId, url);

        setImageSrc((prev) => (prev === url ? prev : url));
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          imageCache.set(postId, PLACEHOLDER_IMAGE);
        }
      });

    return () => controller.abort();
  }, [postId]);

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <img
          src={imageSrc}
          alt={meeting?.title || "Event image"}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.action}
            title="View event"
            onClick={(e) => {
              e.stopPropagation();
              getMeetingURL();
            }}
          >
            <EyeIcon />
          </button>

          <button
            type="button"
            className={styles.action}
            title="Registrants"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenEvent({
                id: meeting.post_id,
                occurrence_id: meeting.occurrence_id,
                registrants_view: true,
              });
            }}
          >
            <UserCircleIcon />
          </button>

          <button
            type="button"
            className={styles.action}
            title="Edit event"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenEvent({
                id: meeting.post_id,
                occurrence_id: meeting.occurrence_id,
              });
            }}
          >
            <PencilSquareIcon />
          </button>
        </div>
      </div>

      <div className={styles.body}>
        <div>
          <h3 className={styles.title}>{meeting.title}</h3>

          <div className={styles.meta}>
            <ClockIcon />
            {meeting.date
              ? `${meeting.date} · ${meeting.time}`
              : "Recurring event"}
          </div>

          {meeting.timezone && (
            <div className={styles.meta}>
              <MapPinIcon />
              {meeting.timezone}
            </div>
          )}
        </div>

        <div className={styles.badges}>
          {!meeting.is_hidden ? (
            <span className={`${styles.status} ${styles.success}`}>
              <span className={styles.dot} />
              On sale
            </span>
          ) : (
            <span className={`${styles.status} ${styles.muted}`}>
              <span className={styles.dot} />
              Unlisted
            </span>
          )}

          {meeting.recurrence !== "Recurring" ? (
            <span className={`${styles.status} ${styles.warning}`}>
              <span className={styles.dot} />
              One-time
            </span>
          ) : (
            <span className={`${styles.status} ${styles.brand}`}>
              <span className={styles.dot} />
              Recurring
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
