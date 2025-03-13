import classnames from "classnames";

export default function PricingTable({ otherClasses }) {
  const pricingTableClasses = classnames(otherClasses);

  return (
    <div className={pricingTableClasses} data-testid="pricing-table">
      pricing-table Component!
    </div>
  );
}
