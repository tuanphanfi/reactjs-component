import React from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
const Button = () => {
    return (
        <div>
            <button className={styles.btn} onClick={() => alert("OK")}>Button</button>
            {/* <button className={styles.error}>Error Button</button>; */}
        </div>
    );
};

export default Button;