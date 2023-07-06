import {createWebHistory, createRouter} from "vue-router";
import Home from "@/components/Home.vue";
import UpdateStudent from "@/components/UpdateStudent.vue";
import AddScore from "@/components/AddScore.vue";
import DeleteStudent from "@/components/DeleteStudent.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/home", component: Home},
    {path: "/update/:id", component: UpdateStudent},
    {path: "/score/:id", component: AddScore},
    {path: "/delete/:id", component: DeleteStudent},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;