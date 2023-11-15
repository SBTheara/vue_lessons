<template>
    <v-card min-height="100%" class="mx-auto">

        <v-list subheader two-line flat>
            <v-subheader>Task list</v-subheader>
            <v-list-item v-for="task in tasks" :key="task.id">
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>{{ task.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ task.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    name: "What have i done?",
                    subtitle: "Allow notification",
                    done: false,
                },
                {
                    id: 2,
                    name: "What do you do?",
                    subtitle: "Allow notification",
                    done: false,
                },
                {
                    id: 3,
                    name: "How do you do?",
                    subtitle: "Allow notification",
                    done: false,
                },
            ],
        }
    }
}
</script>