import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar';
import { fieldSets, pageDescription, slug } from '../commonFields';

export default {
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  fieldsets: fieldSets,
  icon: AiOutlineStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    { ...slug() },
    { ...pageDescription },
  ],
};
