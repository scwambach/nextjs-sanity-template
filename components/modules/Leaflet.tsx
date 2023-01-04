import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false,
});

const Leaflet = () => {
  return (
    <div>
      <DynamicMap />
    </div>
  );
};

export { Leaflet };
