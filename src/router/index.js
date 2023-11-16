import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '../pages/indexHome.vue';
import TodosComponent from '../pages/todos/indexTodos.vue';
import TodoComponent from '../pages/todos/_idTodo.vue';
import TodoCreate from '../pages/todos/create/indexCreate.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeComponent
        },
        {
            path: '/todos',
            name: 'Todos',
            component: TodosComponent
        },
        {
            path: '/todos/create',
            name: 'TodoCreate',
            component: TodoCreate
        },
        {
            path: '/todos/:id',
            name: 'Todo',
            component: TodoComponent
        }
    ]
});

// 1 /home 2 /todos 3 /todos/create 4 /todos/:id

export default router;