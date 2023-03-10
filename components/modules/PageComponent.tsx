import { useContext, useEffect, useRef, useState } from 'react';
import * as C from '@components';
import styled from 'styled-components';

const PageComponent = (props: C.BlockProps) => {
  const [inView, setInView] = useState(false);

  const ref = useRef();

  const { hasWindow } = useContext(C.MainContext);

  useEffect(() => {
    const currentComponent = document.getElementById(props.componentId);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    if (currentComponent) {
      observer.observe(currentComponent);
    }
  }, [ref, props.componentId]);

  const PageBlock = C[props._type[0].toUpperCase() + props._type.substring(1)];

  return (
    <Section
      ref={ref}
      key={props._key}
      customStyles={
        props.customStyles ? props.customStyleCode?.code : undefined
      }
      bgColorHeight={
        props.colorCutOff && props.colorHeight ? props.colorHeight : undefined
      }
      className={`${props.componentId || `component_${props._type}`} ${
        props.backgroundColor || 'bg-white-100'
      }`}
      id={props.componentId || `component-${props._type}_${props.index}`}
    >
      <PageBlock {...props} index={props.index}>
        {props.backgroundImage && !props.colorCutOff && (
          <C.ProgressiveImage
            alt={`Background Image for block ${props._type}_${props.index}`}
            {...props.backgroundImage}
            isBackground
            mobileCrop
            priority={props.index === 0}
          />
        )}
        {props.backgroundVideo && !props.colorCutOff && hasWindow && (
          <C.BgVideo backgroundVideo={props.backgroundVideo} inView={inView} />
        )}
        <div
          className={`colorBack block absolute top-0 left-0 w-full h-full${
            (props.backgroundImage || props.backgroundVideo) &&
            !props.colorCutOff
              ? ' opacity-50'
              : ''
          } ${
            props.colorCutOff
              ? props.backgroundColor === 'bg-white-100'
                ? `bg-blue-500 h-1/4`
                : `bg-white-100 h-1/4`
              : props.backgroundColor
          }`}
        />
      </PageBlock>
    </Section>
  );
};

export { PageComponent };

const Section = styled.section`
  ${({ customStyles }) => (customStyles ? customStyles : '')}
  ${({ bgColorHeight }) =>
    bgColorHeight &&
    `
  .colorBack {
    height: ${bgColorHeight}px;
  }
  `}
`;
