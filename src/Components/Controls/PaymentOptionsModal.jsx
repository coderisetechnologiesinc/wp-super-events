import ModalShell from "../Modals/ModalShell";
import PageActionButton from "./PageActionButton";
import styles from "./PaymentOptionsModal.module.scss";

const PaymentOptionsModal = ({
  open = false,
  title = "Payment option",
  text = "Select a payment option (monthly or annual)",
  price = 0,
  priceAnnual = 0,
  fee = 0,
  onAcceptMonthly = () => {},
  onAcceptAnnual = () => {},
  onCancel = () => {},
}) => {
  if (!open) return null;

  return (
    <ModalShell
      size="sm"
      title={title}
      description={text}
      onClose={onCancel}
      footer={
        <div className={styles.actions}>
          <PageActionButton
            text="Cancel"
            type="secondary"
            onAction={onCancel}
          />
          <PageActionButton text="Monthly" onAction={onAcceptMonthly} />
          <PageActionButton text="Annual" onAction={onAcceptAnnual} />
        </div>
      }
    >
      <dl className={styles.summary}>
        <div>
          <dt>Price monthly</dt>
          <dd>${price}</dd>
        </div>
        <div>
          <dt>Price annual</dt>
          <dd>${priceAnnual}</dd>
        </div>
        <div>
          <dt>Application fee</dt>
          <dd>{fee} %</dd>
        </div>
      </dl>
    </ModalShell>
  );
};

export default PaymentOptionsModal;
