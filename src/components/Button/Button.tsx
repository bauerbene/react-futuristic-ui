import React from 'react';
import styles from './Button.module.scss';

export type TButtonProps = {
    readonly children?: React.ReactElement | string;
}

const Button = (props: TButtonProps):JSX.Element => {
    return (
        <button className={styles.buttonBase}>
            <div className={styles.buttonSide}/>
            {props.children}
        </button>
    );
};

export default Button;