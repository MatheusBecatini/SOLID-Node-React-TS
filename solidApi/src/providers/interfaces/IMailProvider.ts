export interface IEmail {
  name: string;
  email: string;
}

export interface IMessage {
  to: IEmail;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
