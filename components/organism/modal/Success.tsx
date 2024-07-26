'use client';

import Modal from "./Modal";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";
import styles from './Modal.module.scss';

interface Props {
    isOpen: boolean,
    onClose: ()=> void;
}

export const Success = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen} closed={onClose}>
            <Title as="h2" className={styles.title}>Request was submitted</Title>
            <Text className={styles.text}>We have sent the details to your email</Text>

            <Button className={styles.button} onClick={onClose}>
                Done
            </Button>
        </Modal>
    );
};