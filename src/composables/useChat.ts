import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.interface';
import { ref } from 'vue';

export const useChat = () => {
  const baseUrl: string = 'https://yesno.wtf/api';
  const messages = ref<ChatMessage[]>([]);

  const getYesNoResponse = async () => {
    const res = await fetch(baseUrl);
    const data = (await res.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) return;

    await sleep(1);
    const { answer, image } = await getYesNoResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    messages,
    onMessage,
  };
};
