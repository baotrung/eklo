import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./MaxWitdthWrapper.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
}

const MaxWidthWrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
