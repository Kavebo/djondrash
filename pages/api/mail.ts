import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid, { MailDataRequired } from '@sendgrid/mail';
import { IMailFormData } from '../../components/MailSender';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { subject, email, htmlTemplate }: IMailFormData = JSON.parse(req.body);

  const data: MailDataRequired = {
    to: email,
    from: 'info@djondrash.com',
    subject,
    html: htmlTemplate,
  };

  try {
    await sendgrid.send(data);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    res.status(400).json({ status: 'Not Ok', body: { error } });
  }

  res.status(200).json({ status: 'Ok' });
};

export default mail;
