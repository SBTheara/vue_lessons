<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .box {
        background-color: darkgoldenrod;
        padding: 10px;
        border: 1px solid rgb(70, 30, 30);
        margin-bottom: 1em;
    }
</style>    