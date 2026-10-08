import BadgeImage from "./BadgeImage";
import styles from "./Badge.module.scss";

// size  : small | medium | large
// type  : pill-colour | pill-outline | badge | badge-modern
// color : gray | brand | error | warning | success | info | purple |
//         blue-light | zoom | neutral
const COLORS = {
  gray: styles.gray,
  brand: styles.brand,
  error: styles.error,
  warning: styles.warning,
  success: styles.success,
  info: styles.info,
  purple: styles.purple,
  "blue-light": styles.blueLight,
  zoom: styles.zoom,
  neutral: styles.neutral,
};

const TYPES = {
  "pill-colour": styles.pill,
  "pill-outline": styles.pillOutline,
  badge: styles.square,
  "badge-modern": styles.modern,
};

const SIZES = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const JUSTIFY = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
};

// Extra class names some call sites still pass; anything unrecognised is kept
// as a literal class so legacy hooks keep working.
const EXTRAS = {
  "badge-short": styles.short,
};

const Badge = ({
  text,
  icon = null,
  iconAfter = null,
  image = null,
  color,
  type,
  size,
  align,
  additionalType = null,
  fullWidth = false,
  justify = null,
  onAction = () => {},
}) => {
  const classes = [
    styles.badge,
    SIZES[size] || SIZES.small,
    TYPES[type] || TYPES["badge-modern"],
    COLORS[color] || COLORS.gray,
    align === "center" ? styles.alignCenter : styles.alignEnd,
    justify ? JUSTIFY[justify] || "" : "",
    fullWidth ? styles.fitContent : "",
    additionalType ? EXTRAS[additionalType] || additionalType : "",
    styles.clickable,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onAction}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {image && <BadgeImage image={image} />}
      {text && <span>{text}</span>}
      {iconAfter && <span className={styles.icon}>{iconAfter}</span>}
    </div>
  );
};

export default Badge;
