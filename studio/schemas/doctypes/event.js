import MdEvent from '@meronex/icons/md/MdEvent'
import {blockContent, fieldSets, link, mainImage, slug} from '../commonFields'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: MdEvent,
  fieldsets: fieldSets,
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()},
    {...slug()},
    {...mainImage},
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'LL',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Time',
      name: 'time',
      type: 'string',
    },
    {
      name: 'physicalLocation',
      title: 'Does this event have a physical location?',
      type: 'boolean',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      hidden: ({parent}) => !parent.physicalLocation,
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Street',
          name: 'street',
          type: 'string',
        },
        {
          title: 'City, State, and Zip',
          name: 'cityStateZip',
          type: 'string',
        },
      ],
    },
    {
      ...blockContent({
        name: 'description',
        title: 'Description',
      }),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      description: 'Provide any relavent links to the event',
      validation: (Rule) => Rule.max(2),
      of: [{...link({title: 'Link', name: 'link'})}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection) {
      return {...selection}
    },
  },
}
