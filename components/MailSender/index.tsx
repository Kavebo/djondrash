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

  const handleOnTextAreaChange = () => {
    setHtmlTemplate(textAreaRef.current?.value || '');
  };

  const handleOnSubmit = (data: IMailFormData) => {
    users.forEach((user) => {
      let htmlText;
      if (htmlTemplate.includes('</body>')) {
        htmlText = htmlTemplate.replace('</body>', `${unsubscribePart.replace(REPLACE_USER_ID, user.id)}</body>`);
      } else {
        htmlText = `${htmlTemplate}<br>${unsubscribePart.replace(REPLACE_USER_ID, user.id)}`;
      }

      fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify({ ...data, htmlTemplate: htmlText, email: user.email }),
      });
    });
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          {...register('subject', { required: true })}
          style={{ width: 300, fontSize: 20 }}
          placeholder="Email subject"
        />
        <button type="submit" style={{ fontSize: 20, margin: 5, background: '#eadcaa' }}>
          Send
        </button>
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
