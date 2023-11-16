import { ref, onUnmounted } from 'vue';

export const useToast = () => {
    const toastMessage = ref('');
    const toastAlertType = ref('');
    const showToast = ref(false);
    const timeOut = ref(null);

    const triggerToast = (message, type = 'success') => {
        toastMessage.value = message;
        toastAlertType.value = type;
        showToast.value = true;
        timeOut.value = setTimeout(() => {
            console.log('hello');
            toastMessage.value = '';
            toastAlertType.value = '';
            showToast.value = false;
        }, 1000);
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