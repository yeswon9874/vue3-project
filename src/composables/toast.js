import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export const useToast = () => {
    const store = useStore();
    const toastMessage = computed(() => store.getters.toastMessageWithSmile);
    const toastAlertType = computed(() =>store.state.toastAlertType);
    const showToast = computed(() =>store.state.showToast);
    const timeOut = computed(() =>store.state.timeOut);

    const triggerToast = (message, type = 'success') => {
        store.dispatch('triggerToast', message, type);
    }

    onUnmounted(() => {
        console.log('unmounted');
        clearTimeout(timeOut.value);
    });

    return {
        toastMessage,
        toastAlertType,
        showToast,
        triggerToast
    }
}