# Demo sử dụng React với React Query để truy vấn dữ liệu

Link tài liệu: [docs](https://swr.vercel.app/docs/getting-started)

## Cài đặt

`yarn add swr`

hoặc

`npm install swr`

## API

### useSWR

[useSWR](https://swr.vercel.app/docs/options)

### useSWRInfinite
[useSWRInfinite](https://swr.vercel.app/docs/pagination#useswrinfinite)

## Demo

### Tạo custom hook với uswSWR

[src/hooks/useData.js](https://github.com/lqaxx7799/swr-demo/tree/master/src/hooks/useData.js)

- Hook `useData` có thể được truy cập ở các Component khác nhau.
- Nếu gọi trong khoảng thời gian `dedupingInterval`, không tạo ra request mới mà lấy từ cache.

### Sử dụng custom hook
[src/MyComponent.js](https://github.com/lqaxx7799/swr-demo/tree/master/src/MyComponent.js) 

[src/AnotherComponent.js](https://github.com/lqaxx7799/swr-demo/tree/master/src/AnotherComponent.js) 

### Cuộn vô hạn (Infinite Scroll) với useSWRInfinite
[src/InfiniteComponent.js](https://github.com/lqaxx7799/swr-demo/tree/master/src/InfiniteComponent.js) 
