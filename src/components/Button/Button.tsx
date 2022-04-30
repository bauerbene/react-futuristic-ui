import React from 'react';
import styles from './Button.module.scss';

export type TButtonProps = {
    readonly children?: React.ReactElement | string;
    readonly onclick?: () => void;
}

const Button = (props: TButtonProps):JSX.Element => {
    const onClick = () => {
        if (props.onclick) {
            props.onclick();
        }
    };

    return (
        <button className={styles.buttonBase} onClick={() => onClick()}>
            <div className={styles.buttonSideLeft}/>
            <div className={styles.buttonSideRight}/>
            {props.children}
        </button>
    );
};

export default Button;