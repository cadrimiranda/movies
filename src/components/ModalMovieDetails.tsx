import {
  Text,
  Modal,
  Spinner,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { forwardRef, useImperativeHandle, useState, Ref } from "react";
import { MovieResponse } from "../types/global";
import MovieDetails from "./MovieDetails";

type ModalMovieDetailsType = {
  movie: MovieResponse | null;
  handleCloseModal: () => void;
};

export type ModalRelf = {
  visible: boolean;
  onOpenModal: () => void;
};

const ModalMovieDetails = forwardRef(
  ({ movie, handleCloseModal }: ModalMovieDetailsType, ref: Ref<ModalRelf>) => {
    const [visible, setVisible] = useState<boolean>(false);

    const onOpenModal = () => {
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
        <ModalContent>
          <ModalHeader>
            {movie ? (
              <Text fontSize={{ base: "md", xl: "2xl" }}>
                More details about {movie.title}
              </Text>
            ) : (
              <Spinner />
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {movie ? <MovieDetails movie={movie} /> : <Spinner />}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);

export default ModalMovieDetails;
