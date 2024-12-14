// import React from 'react'
import { useEffect, useState } from "react";
import styles from "./../styles/components/Modal.module.css";
import classNames from "classnames";

function Modal({show, onClose, info}) {
    const modalClass = show ? styles.modalActive : "";

  return (
    <div className={classNames(styles.modal, modalClass)} onClick={onClose}>
      <div className={styles.modalContent}>
        {info}

        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export { Modal };
