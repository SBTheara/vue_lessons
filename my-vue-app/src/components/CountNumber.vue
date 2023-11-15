<template>
    <div id="app"> 
        <p>
            The count is : {{ count }}
        </p>
        <button @click="count+=1">Add</button>
        <button @click="count-=1">Sub</button>
    </div>

</template>
<script>
    export default {
        data(){
            return {
                count : 0
            }
        }
    }
</script>