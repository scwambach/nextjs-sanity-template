import { AlertBarProps, PortableTextModule, MainContext } from '@components';
import styled from 'styled-components';
import IosClose from '@meronex/icons/ios/IosClose';
import { useContext } from 'react';
import { breakpoints } from '@styles';

const AlertBar = ({ content }: AlertBarProps) => {
  const { setAlerted } = useContext(MainContext);
  const handleClose = () => {
    sessionStorage.setItem('alertClosed', 'true');
    setAlerted(false);
  };
  return (
    <AlertBox className="fixed text-center bottom-0 left-0 bg-red-500 w-full text-white-100">
      <PortableTextModule text={content} className="copy" />
      <button
        className="bg-red-600 md:bg-transparent absolute top-0 right-0 md:top-1/2 md:-translate-y-1/2 md:right-5"
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
    padding: 10px 2px;

    @media screen and (max-width: ${breakpoints.md - 1}px) {
      max-width: calc(100% - 20px);
      margin: 0 auto 0 0;
    }
  }
  p {
    margin: 10px;
  }
`;
