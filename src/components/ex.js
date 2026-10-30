export const num=1;
export function test(){
  return 3;
}
// 디폴트 없이 각각 내보낼수 있다.

export default {num, test};
// export default {num, test}; 여러개 내보내고 싶으면 객체화해서 보내야한다.
// export default num;
// export default num; 파일당 딱 하나만 내보낸다. 두번 중복 적어도 안됨