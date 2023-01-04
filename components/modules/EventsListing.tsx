import {
  EventProps,
  Container,
  LinkObject,
  Button,
  ProgressiveImage,
} from '@components';
import { breakpoints } from '@styles';
import dayjs from 'dayjs';

interface EventsListingProps {
  events?: EventProps[];
  past?: boolean;
}

const EventsListing = ({ events, past }: EventsListingProps) => {
  return (
    <section className="eventListing relative py-12 lg:py-20">
      <Container maxWidth={breakpoints.md}>
        <div>
          {events && events.length > 0 ? (
            events.map(
              (
                {
                  _id,
                  date,
                  links,
                  location,
                  postImage,
                  physicalLocation,
                  slug,
                  time,
                  title,
                },
                index
              ) => {
                return (
                  <div
                    key={_id}
                    className={`relative${index > 0 ? ' mt-20' : ''}`}
                  >
                    <div className="datebox lg:absolute lg:top-0 lg:-left-[100px] bg-black-500 text-white-100 w-12 h-12 md:w-16 md:h-16 flex flex-col justify-center text-center font-display mb-2 lg:mb-0">
                      <p className="text-xs md:text-lg leading-[15px] md:leading-[25px]">
                        {dayjs(date).format('MMM')}
                      </p>
                      <p className="text-lg md:text-3xl leading-[15px] md:leading-[25px]">
                        {dayjs(date).format('DD')}
                      </p>
                    </div>
                    <div className="info">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        {title}
                      </h2>
                      <p>{dayjs(date).format('MMMM D, YYYY')}</p>
                      {time && <p>{time}</p>}
                      {physicalLocation && (
                        <p>
                          <LinkObject
                            className="hover:text-red-500 transition-all ease-in-out"
                            url={`https://www.google.com/maps/place/${location.street} ${location.cityStateZip}`}
                            newTab
                          >
                            @&nbsp;
                            {location.name ||
                              `${location.street}, ${location.cityStateZip}`}
                          </LinkObject>
                        </p>
                      )}
                    </div>
                    {postImage && (
                      <div className="image my-4 lg:my-10">
                        <ProgressiveImage {...postImage} imgWidth={862} />
                      </div>
                    )}
                    <div className="flex flex-col w-full md:flex-row gap-3">
                      <Button>
                        <LinkObject
                          newTab={false}
                          copy="See Event"
                          internalLink={{
                            slug: {
                              current: slug,
                            },
                          }}
                        />
                      </Button>
                      {links && (
                        <>
                          {links.map((link) => (
                            <Button key={link._key}>
                              <LinkObject {...link} />
                            </Button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <>
              <h2 className="text-red-500 font-semibold text-3xl mb-5">
                There currently aren&apos;t any events scheduled at the moment.
                Please check back soon!
              </h2>
              <Button>
                <LinkObject
                  newTab={false}
                  copy="See Past Event"
                  internalLink={{
                    slug: {
                      current: `/events/past`,
                    },
                  }}
                />
              </Button>
            </>
          )}
          {!past && events.length > 0 && (
            <div className="flex justify-center mt-20">
              <LinkObject
                internalLink={{ slug: { current: '/events/past' } }}
                copy="See Past Events"
                className="uppercase text-2xl underline lg:hover:text-red-500 lg:transition-all"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { EventsListing };
