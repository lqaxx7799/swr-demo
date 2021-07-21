import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json());

function useData() {
  const { data, error } = useSWR("https://api.github.com/repos/vercel/swr", fetcher, {
    dedupingInterval: 6000,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useData;
