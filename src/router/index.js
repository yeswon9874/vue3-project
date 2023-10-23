import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from '../pages/indexHome.vue';
import TodosComponent from '../pages/todos/indexTodos.vue';


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
        }
    ]
});

// 1 /home 2 /todos 3 /todos/create 4 /todos/:id

export default router;