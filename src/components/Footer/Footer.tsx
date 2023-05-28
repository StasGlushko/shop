import styles from './Footer.module.scss'
import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <h2>Footer</h2>
        </footer>
    );
}
