import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import PeopleCard from "./PeopleCard"


function PeopleModal(props) {
    const theme = useMantineTheme();
    return (
      <Modal
        overlayOpacity={1}
        overlayBlur={3}
        size="40%"
        opened={props.modalOpened}
        onClose={() => props.setModalOpened(false)}
      >
  
      <PeopleCard page='modal'/>
      </Modal>
    );
}

export default PeopleModal