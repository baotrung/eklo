import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";
import styles from "./MaxWidthContainer.module.scss";

interface Props extends PropsWithChildren {
  containerClassName?: string;
  wrapperClassname?: string;
}
export const MaxWidthContainer: FC<Props> = ({
  containerClassName,
  wrapperClassname,
  children,
}) => {
  return (
    <div className={classNames(styles.container, containerClassName)}>
      <div
        className={classNames(styles["max-width-wrapper"], wrapperClassname)}
      >
        {children}
      </div>
    </div>
  );
};
