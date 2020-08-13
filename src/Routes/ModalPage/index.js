import React from "react"
import { Modal, Button, Space } from 'antd';
import PageData from "./PageData"
const ModalPage = () => {

    function success() {
        Modal.success({
          content: <PageData />,
        });
    }

    return(
        <>
            <Button onClick={success}>Success</Button>
        </>
    )
}

export default ModalPage