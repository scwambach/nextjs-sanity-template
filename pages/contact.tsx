import {
  CommonPageProps,
  Container,
  DataPage,
  Form,
  FormProps,
  Leaflet,
  LinkObject,
} from '@components';
import { getClient } from '@utils';
import { contactQuery } from '@queries';
import dayjs from 'dayjs';

interface Props extends CommonPageProps {
  form: FormProps;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const ContactPage = ({ doc, form, global }: Props) => {
  const {
    site: { contact },
  } = global;
  const addressString = `${contact.address || ''} ${contact.address2 || ''} ${
    contact.cityState || ''
  }${contact.zip || ''}`;
  return (
    <DataPage data={doc} global={global} message={doc.pageDescription}>
      <div className="bg-blue-500 py-12 lg:py-20">
        <Container className="max-w-xl">
          <div className="flex flex-col lg:flex-row gap-10">
            <Form
              {...form}
              className="w-full lg:w-1/2"
              formClassName="text-black-900 p-8 lg:p-12 bg-white-100"
            />
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div className="pb-8 font-bold">
                <address className="text">
                  <LinkObject
                    url={`https://www.google.com/maps/place/${addressString}`}
                    newTab
                  >
                    {contact.address && <p>{contact.address}</p>}
                    {contact.address2 && <p>{contact.address2}</p>}
                    {contact.cityState && (
                      <p>{`${contact.cityState} ${contact.zip}`}</p>
                    )}
                  </LinkObject>
                </address>
                {contact.mainPhone && (
                  <p className="mt-5">{contact.mainPhone}</p>
                )}
              </div>
              <div className="h-[460px]">
                <Leaflet />
                {/* <Map /> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </DataPage>
  );
};

export default ContactPage;

export async function getStaticProps() {
  const doc = await getClient().fetch(contactQuery, {
    today,
  });

  if (!doc.page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: doc.page,
      form: doc.form,
      global: doc.global,
    },
  };
}
