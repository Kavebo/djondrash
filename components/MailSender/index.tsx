import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from '../../pages/emails';
import { exampleTemplate, REPLACE_USER_ID, unsubscribePart } from './exampleTemplate';
import { TemplateWrapper, TextArea, IFrame, Row } from './styled';

export interface IMailFormData {
  email: string;
  subject: string;
  htmlTemplate: string;
}

interface IMailSender {
  users: IUser[];
}

const MailSender: React.FC<IMailSender> = ({ users }) => {
  const { register, handleSubmit } = useForm();
  const [htmlTemplate, setHtmlTemplate] = useState(exampleTemplate);
  const textAreaRef = useRef<HTMLTextAreaElement>();

  console.log('[MailSender] users', users);

  const handleOnTextAreaChange = () => {
    setHtmlTemplate(textAreaRef.current?.value || '');
  };

  const handleOnSubmit = (data: IMailFormData) => {
    const htmlText = htmlTemplate.replace('</body>', `${unsubscribePart.replace(REPLACE_USER_ID, data.email)}</body>`);

    fetch('/api/mail', { method: 'post', body: JSON.stringify({ ...data, htmlTemplate: htmlText }) });
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(handleOnSubmit)}>
        <input {...register('email', { required: true })} placeholder="email" />
        <input {...register('subject', { required: true })} placeholder="subject" />
        <button type="submit">Odoslat</button>
      </form>
      <Row>
        <h2>Text Area</h2>
        <h2>Preview</h2>
      </Row>
      <TemplateWrapper>
        <TextArea
          ref={(ref) => {
            (textAreaRef.current as any) = ref;
          }}
          value={htmlTemplate}
          onChange={handleOnTextAreaChange}
        />
        <IFrame srcDoc={htmlTemplate} />
      </TemplateWrapper>
    </div>
  );
};

export default MailSender;
