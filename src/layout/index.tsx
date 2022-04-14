import { ReactNode } from 'react';
import styles from './layout.module.scss';

type LayoutProps = {
  children: ReactNode,
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.test}>
      {children}
    </div>
  );
}

export default Layout;
