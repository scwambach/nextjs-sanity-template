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
    <AlertBox className="fixed text-center bottom-0 left-0 bg-red-500 w-full text-white-100">
      <PortableTextModule text={content} className="copy text-sm md:text-base"/>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-5"
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
  .copy {
    max-width: calc(100% - 120px);
    margin: auto;
  }
  p {
    margin: 10px;
  }
`;
