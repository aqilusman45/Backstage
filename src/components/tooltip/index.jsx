import classnames from "classnames";

export default function Tooltip({ otherClasses }) {
  const tooltipClasses = classnames(otherClasses, "tooltip");

  return (
    <div className={tooltipClasses} data-testid="tooltip">
      <span className="tooltiptext rounded-xl">
        Additional uploads available, priced at €100 per x1000 additional
        uploads
      </span>
    </div>
  );
}
