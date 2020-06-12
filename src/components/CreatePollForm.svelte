<script>
  import Button from '../shared/Button.svelte';
  let fields = { question: '', answerA: '', answerB: '' };
  let errors = { question: '', answerA: '', answerB: '' };
  let valid = false;

  const lengthValidatior = (fileds, lengths) => {
    
    const fieldKeyList = Object.keys(fields);

    fieldKeyList.forEach((key, index) => {
      const value = fileds[key];
      const validLength = lengths[index] ? lengths[index] : 1;
      const errorMessage = validLength === 1 ? `${key} cannot be empty` : `${key} must be at least ${validLength} charactors long`;
      if(value.trim().length < validLength) {
        valid = false;
        errors[key] = errorMessage;
      } else {
        errors[key] = '';
      }
    });

    if(valid) {
      console.log('valid', fields);
    }
  }

  const submitHandler = () => {
    valid = true;
    lengthValidatior(fields, [5, 1, 1]);
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question}>
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Anser A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-a" bind:value={fields.answerB}>
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type={"secondary"} inverse={true}>Add Poll</Button>
</form>

<style>
 form {
   width: 400px;
   margin: 0 auto;
   text-align: center;
 }
 .form-field {
   margin: 1px auto;
 }
 input {
   width: 100%;
   border-radius: 6px;
 }
 label {
   margin: 10px auto;
   text-align: left;
 }
 .error {
   font-weight: bold;
   font-size: 12px;
   color: #d91b42;
 }
</style>