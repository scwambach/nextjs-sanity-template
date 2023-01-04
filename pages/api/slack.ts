const Axios = require('axios');

export default async (req: any, res: any) => {
  await Axios.post(process.env.SLACK_HOOK, {
    text: req.body,
  });

  return await res.status(200).json({ message: 'sent' });
};
