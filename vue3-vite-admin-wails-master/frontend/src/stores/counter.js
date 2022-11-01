import {defineStore} from 'pinia'
import {ref} from "vue";
import router from "@/router";

// 保存选择中的数组，不随着刷新而改变
const indexKey = "indexKye"

// 保存导航数组不随着刷新而丢弃
const navBarKey = "navBarKey"

// 保存页面载入
export const useStore = defineStore('store', () => {


    // 根据数组来渲染路由
    let menus = []
    for (let route of router.options.routes) {
        if (route.meta) {
            // 路由和菜单
            menus = route.children
            break
        }
    }


    const refresh = ref(new Date().getTime());

    // 对于页面刷新，而菜单路由也改变的操作
    let item = window.sessionStorage.getItem(indexKey);
    if (item === null) {
        item = "/manager"
    }
    const path = ref(item)

    // 子路由
    const navBar = navBarStore()

    const setSelIndex = (v) => {
        path.value = v
        window.sessionStorage.setItem(indexKey, v)
        menus.forEach((e)=>{
            if (e.path === v) {
                navBar.addPath(e)
                return true;
            }
        })
    }

    const remove = (v) => {
        navBar.remove(v)
    }

    return {path, setSelIndex,menus,refresh,remove}
})


// 面包屑
export const navBarStore = defineStore('navBar',()=>{
    const menus = ref([]);

    let item = window.sessionStorage.getItem(navBarKey);
    if (item !== null) {
        menus.value = JSON.parse(item)
    }
    const addPath = (v)=>{
        // 判断是否已经添加过了
        for (let i = 0; i < menus.value.length; i++) {
            if (menus.value[i].path === v.path) {
                return
            }
        }
        menus.value.push(v)
        window.sessionStorage.setItem(navBarKey,JSON.stringify(menus.value));
    }

    //删除
    const remove = (v) => {
        delete menus.value.splice(v,1)
        window.sessionStorage.setItem(navBarKey,JSON.stringify(menus.value));
    }
    const removeAll = () => {
        menus.value = []
        window.sessionStorage.setItem(navBarKey,JSON.stringify(menus.value));
    }

    return {menus,addPath,remove,removeAll}
})




