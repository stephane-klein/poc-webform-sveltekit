<script>
    export let form;
</script>
<h1>Contact</h1>

{#if form?.success}
    <p>Message send with success!</p>

    <p><a href="">Send another message…</a></p>
{:else}
<form method="POST">
    <label for="name">Name:</label> <input id="name" name="name" placeholder="John Doe" /><br />
    <label for="email">Email:</label> <input id="email" name="email" placeholder="john.doe@example.com" /><br />

    <label for="message">Message:</label><br />
    <textarea id="message" name="message" placeholder="message" /><br />

    <input type="submit" value="Send" />
</form>
{/if}
