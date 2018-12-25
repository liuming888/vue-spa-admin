import $request from '@/utils/api/request.js';
export function name({a,b}) {
    return $request.get("/api/test", data: { a, b })
}