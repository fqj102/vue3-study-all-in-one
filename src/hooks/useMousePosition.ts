import { ref, onMounted, onUnmounted } from "vue";
function useMoursePosition() {
  const x = ref(0);
  const y = ref(0);
  const mouseClick = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", mouseClick);
  });
  onUnmounted(() => {
    document.removeEventListener("click", mouseClick);
  });
  return { x, y, mouseClick };
}

export default useMoursePosition;
