'use client';

import Modal from "./Modal";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import styles from './Modal.module.scss';

interface Props {
    isOpen: boolean,
    onClose: ()=> void;
}

export const Register = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen} closed={onClose}>
            <Title as="h2" className={styles.title}>Registration</Title>
            <form className={styles.form}>
                <label>
                    <span>Email<i>*</i></span>
                    <input type="email" name="email" placeholder="example@email.com" />
                </label>
                <Button className={styles.sumbit}>
                    Register
                </Button>
            </form>
        </Modal>
    );
};