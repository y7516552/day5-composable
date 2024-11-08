export const useHome = () => {

  const newsList = ref([]);
  const isLoading = ref(false);

  const getNewsData = async () => {
    isLoading.value = true
    try {
      const res = await $fetch("https://nuxr3.zeabur.app/api/v1/home/news")
      newsList.value = res.result
    }catch(error){
      console.log("error",error)
    }finally{
      isLoading.value = false
    }
  }

  return { newsList, isLoading, getNewsData};
};
