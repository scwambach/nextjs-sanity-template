import { AlertBarProps, PortableTextModule, MainContext } from '@components';
import styled from 'styled-components';
import IosClose from '@meronex/icons/ios/IosClose';
import { useContext } from 'react';

const AlertBar = ({ content }: AlertBarProps) => {
  const { setAlerted } = useContext(MainContext);
  const handleClose = () => {
    sessionStorage.setItem('alertClosed', 'true');
    setAlerted(false);
  };
  return (
    <AlertBox className="fixed text-center bottom-0 left-0 bg-blue-500 w-full text-white-100">
      <PortableTextModule text={content} />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-20"
        onClick={() => {
          handleClose();
        }}
      >
        <IosClose size={30} />
      </button>
    </AlertBox>
  );
};

export { AlertBar };

const AlertBox = styled.div`
  p {
    margin: 10px;
  }
`;
