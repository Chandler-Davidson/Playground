import { List } from "./index";

const plus = (v: any, w: any) => v + w;
const times = (v: number, w: number) => v * w;
const inc = (x: number) => x + 1;
const id = (x: any) => x

test("", () => expect(List.empty.toList()).toEqual([]));
test("", () => expect(List.fromList([]).toList()).toEqual([]));
test("", () => expect(List.fromList([1, 2, 3]).toList()).toEqual([1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).head()).toEqual(1));
test("", () => expect(List.fromList([]).head()).toEqual(undefined));
test("", () => expect(List.fromList([1, 2, 3]).tail().toList()).toEqual([2, 3]));
test("", () => expect(List.fromList([]).tail().toList()).toEqual([]));
test("", () => expect(List.fromList([1, 2, 3]).get(0)).toEqual(1));
test("", () => expect(List.fromList([1, 2, 3]).get(1)).toEqual(2));
test("", () => expect(List.fromList([1, 2, 3]).get(2)).toEqual(3));
test("", () => expect(List.fromList([1, 2, 3, 4]).take(3).toList()).toEqual([1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3, 4]).drop(1).toList()).toEqual([2, 3, 4]));
test("", () => expect(List.empty.length()).toEqual(0));
test("", () => expect(List.fromList([1]).length()).toEqual(1));
test("", () => expect(List.fromList([1, 2]).length()).toEqual(2));
test("", () => expect(List.empty.nil()).toEqual(true));
test("", () => expect(List.fromList([1]).nil()).toEqual(false));
test("", () => expect(List.fromList([1, 2]).nil()).toEqual(false));
test("", () => expect(List.fromList([2, 3]).cons(1).toList()).toEqual([1, 2, 3]));
test("", () => expect(List.empty.cons(1).toList()).toEqual([1]));
test("", () => expect(List.empty.append(List.empty).toList()).toEqual([]));
test("", () => expect(List.empty.append(List.fromList([1, 2, 3])).toList()).toEqual([1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).append(List.empty).toList()).toEqual([1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).append(List.fromList([1, 2, 3])).toList()).toEqual([1, 2, 3, 1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).slice(1).toList()).toEqual([2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).slice(1, 2).toList()).toEqual([2]));
test("", () => expect(List.fromList([1, 2, 3]).slice().toList()).toEqual([1, 2, 3]));
test("", () => expect(List.fromList([1, 2, 3]).map((x: number) => x * x).toList()).toEqual([1, 4, 9]));
test("", () => expect(List.fromList([1, 2, 3]).filter(x => Boolean(x & 1)).toList()).toEqual([1, 3]));
test("", () => expect(List.fromList([1, 2, 3]).filter(x => !(x & 1)).toList()).toEqual([2]));
test("", () => expect(List.fromList([1, 2, 3]).reverse().toList()).toEqual([3, 2, 1]));
test("", () => expect(List.fromList([List.fromList([1, 2, 3]), List.fromList([1, 2, 3])]).concat().toList()).toEqual([1, 2, 3, 1, 2, 3]));
test("", () => expect(List.empty.concat().toList()).toEqual([]));
test("", () => expect(List.fromList([1, 2, 3]).zipWith(times, List.fromList([3, 2, 1])).toList()).toEqual([3, 4, 3]));
// test("", () => expect(List.fromList([1, 2, 3]).foldr((x, z) => z.cons(x), List.empty).toList()).toEqual([1, 2, 3]));
// test("", () => // expect(List.empty.foldr(() => _ | _, Math.E)).toEqual(Math.E));
// test("", () => expect(List.fromList([1, 2, 3]).foldl(plus, 0)).toEqual(6));
// test("", () => expect(List.fromList([1, 2, 3]).foldl(inc, 0)).toEqual(List.fromList([1, 2, 3]).length()));
// test("", () => expect(List.fromList([1, 2, 3]).scanr(plus, 0).toList()).toEqual([6, 5, 3, 0]));
// test("", () => expect(List.empty.scanr(times, 1).toList()).toEqual([1]));
// test("", () => expect(List.fromList([1, 2, 3]).scanl(plus, 0).toList()).toEqual([0, 1, 3, 6]));
// test("", () => expect(List.empty.scanl(times, 1).toList()).toEqual([1]));
test("", () => expect(List.fromList([1, 2, 3]).elem(0)).toEqual(false));
test("", () => expect(List.fromList([1, 2, 3]).elem(2)).toEqual(true));
test("", () => expect(List.empty.elem(0)).toEqual(false));
test("", () => expect(List.fromList([1, 2, 3]).elemIndex(0)).toEqual(-1));
test("", () => expect(List.fromList([1, 2, 3]).elemIndex(2)).toEqual(1));
test("", () => expect(List.empty.elemIndex(0)).toEqual(-1));
test("", () => expect(List.fromList([1, 2, 3]).find(x => !(x & 1))).toEqual(2));
test("", () => expect(List.fromList([1, 3]).find(x => !(x & 1))).toEqual(undefined));
test("", () => expect(List.empty.find(x => !(x & 1))).toEqual(undefined));
test("", () => expect(List.fromList([1, 2, 3]).findIndex(x => !(x & 1))).toEqual(1));
test("", () => expect(List.fromList([1, 3]).find(x => !(x & 1))).toEqual(undefined));
test("", () => expect(List.empty.find(x => !(x & 1))).toEqual(undefined));
test("", () => expect(List.fromList([true, false]).any(id)).toEqual(true));
test("", () => expect(List.empty.any(id)).toEqual(false));
test("", () => expect(List.fromList([true, false]).all(id)).toEqual(false));
test("", () => expect(List.empty.all(id)).toEqual(true));
test("", () => expect(List.fromList([1, 2, 3]).the()).toEqual(undefined));
test("", () => expect(List.fromList([1, 1, 1]).the()).toEqual(1));
test("", () => expect(List.empty.the()).toEqual(undefined));
test("", () => expect(List.repeat(1).take(10).toList()).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
test("", () => expect(List.repeat(2).take(10).toList()).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
test("", () => expect(List.repeat(3).take(10).toList()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
test("", () => expect(List.iterate(inc, 0).take(10).toList()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
test("", () => expect(List.cycle(List.fromList([1, 2, 3])).take(10).toList()).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));
test("", () => expect(List.replicate(10, 1).toList()).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
test("", () => expect(List.replicate(10, 2).toList()).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
test("", () => expect(List.replicate(10, 3).toList()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
test("", () => expect(List.replicate(0, undefined).toList()).toEqual(List.empty.toList()));
