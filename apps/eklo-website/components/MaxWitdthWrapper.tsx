import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./MaxWitdthWrapper.module.css";

interface Props extends PropsWithChildren {
  column?: boolean;
}

const MaxWidthWrapper: FC<Props> = ({ children, column = false }) => {
  return (
    <div
      className={classNames(styles.wrapper, { [styles.flexColumn]: column })}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
