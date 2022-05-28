import {
  Box,
  Modal,
  Spinner,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useState, Ref } from "react";
import { MoviePlayingResponse } from "../types/global";

type MovieDetailsType = {
  movie: MoviePlayingResponse | null;
  handleCloseModal: () => void;
};

export type ModalRelf = {
  visible: boolean;
  onOpenModal: () => void;
};

const MovieDetails = forwardRef(
  ({ movie, handleCloseModal }: MovieDetailsType, ref: Ref<ModalRelf>) => {
    const [visible, setVisible] = useState<boolean>(false);

    const onOpenModal = () => {
      console.log("open modal");
      setVisible(true);
    };

    const onCloseModal = () => {
      setVisible(false);
      handleCloseModal();
    };

    useImperativeHandle(ref, () => ({
      visible,
      onOpenModal,
    }));

    return (
      <Modal size="6xl" isCentered isOpen={visible} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent width="75vw">
          <ModalHeader>
            {movie ? <Box>{movie.title}</Box> : <Spinner />}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {movie ? <Box>{movie.title}</Box> : <Spinner />}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);

export default MovieDetails;
