import { IMailProvider, IMessage } from "./interfaces/IMailProvider";

export class MailProvider implements IMailProvider {
  async sendMail(message: IMessage) {
    console.log("--------------------------s");
    console.log(
      `${message.to.name} o email foi enviado para ${message.to.email}, com assunto ${message.subject}`
    );
    console.log(`${message.body}`);
    console.log("--------------------------");
  }
}
