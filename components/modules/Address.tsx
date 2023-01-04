import { useContext } from 'react';
import { DynamicIcon, LinkObject, MainContext } from '@components';
import { colors } from '@styles';

interface AddressProps {
  className?: string;
  dark?: boolean;
  small?: boolean;
  noSoc?: boolean;
}

const Address = ({ small, noSoc, dark, className }: AddressProps) => {
  const {
    site: { socials, contact },
  } = useContext(MainContext);
  const addressString = `${contact.address || ''} ${contact.address2 || ''} ${
    contact.cityState || ''
  }${contact.zip || ''}`;
  return (
    <div
      className={`font-bold ${
        small ? 'text-sm' : 'text-xl'
      } order-last md:order-first${className ? ` ${className}` : ''}`}
    >
      <address>
        <LinkObject
          url={`https://www.google.com/maps/place/${addressString}`}
          newTab
        >
          {contact.address && <p>{contact.address}</p>}
          {contact.address2 && <p>{contact.address2}</p>}
          {contact.cityState && <p>{`${contact.cityState} ${contact.zip}`}</p>}
        </LinkObject>
      </address>
      {contact.mainPhone && <p className="mt-5">{contact.mainPhone}</p>}
      {contact.mainEmail && (
        <a href={`mailto:${contact.mainEmail}`}>email us</a>
      )}
      {!noSoc && (
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-10">
          {socials.map(({ icon, url, _key }) => (
            <LinkObject
              key={_key}
              newTab
              url={url}
              copy={url}
              className={`border-thin lg:transition-all ${
                dark
                  ? 'border-black-500 p-3 lg:hover:bg-white-300'
                  : 'border-white-500 p-3 lg:hover:bg-black-300'
              }`}
            >
              <DynamicIcon
                name={icon}
                size={30}
                color={dark ? colors.black : colors.eggShell}
              />
            </LinkObject>
          ))}
        </div>
      )}
    </div>
  );
};

export { Address };
