import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'Javascript or Python',
    answerA: 'Javascript',
    answerB: 'Python',
    votesA: 15,
    votesB: 9
  }
]);

export default PollStore;