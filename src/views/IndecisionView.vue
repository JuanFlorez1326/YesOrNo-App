<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>YES OR NO</span>
    </div>

    <ChatMessages :messages="messages" />
    <MessagesBox @send-message="onMessage($event)" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessagesBox from '@/components/chat/MessagesBox.vue';
import { useChat } from '../composables/useChat';

const { messages, onMessage } = useChat();
</script>
