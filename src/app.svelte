<script>
    export let name;
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>puff!</p>
</main>

<style>
    main {
        font-family: sans-serif;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        width: 100%;
    }

    h1 {
        color: #00ffa6;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: 768px;
        }
    }
</style>