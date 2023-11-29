import styles from "./styles.module.css";

type ButtonProps = {
  title: string;
  span: boolean;
  dataLabel: string;
};

const Button: React.FC<ButtonProps> = ({ title, span, dataLabel }) => {
  const giveDataLabel = () => {
    return {
      [dataLabel]: title,
    };
  };

  const dataLabelAttribute = giveDataLabel();

  return (
    <button
      {...dataLabelAttribute}
      className={`${styles.button} ${span ? styles["span-two"] : ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
